import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FormStatus } from '@sikur/enums';
import { IPartQuestion } from '@sikur/types';
import { convertIsoFields, TransactionsService } from '@sikur/utils';
import { LoggerService } from '@ultra/logger';
import { DataSource, In, IsNull } from 'typeorm';
import { EvaluationFormTemplate } from '@/evaluation-form-template/evaluation-form-template.entity';
import { EvaluationFormTemplateRepository } from '@/evaluation-form-template/evaluation-form-template.repository';
import { EvaluationFormToExport } from '@/form-question-answer/models/form-to-export.model';
import {
  ACTIVE_FORM_STATUSES,
  MAX_DAYS_AGO,
  MAX_ID,
  MILLISECONDS_IN_A_DAY,
} from '@/utils/constants/form';
import exampleData from '@/utils/mocks/exampleData.json';

@Injectable()
export class EvaluationFormTemplateService {
  constructor(
    private readonly repository: EvaluationFormTemplateRepository,
    private readonly logger: LoggerService,
    private readonly dataSource: DataSource,
    private readonly transactionService: TransactionsService,
  ) {}

  async getByFormId(
    formId: EvaluationFormTemplate['formId'],
    personalIdentifier: EvaluationFormTemplate['personalIdentifier'],
  ): Promise<EvaluationFormTemplate> {
    this.logger.log(
      `Fetching evaluation form template by form ID: ${formId}, for user ${personalIdentifier}`,
      this.getByFormId.name,
    );

    const evaluationFormTemplate = await this.repository.findOneBy({
      formId,
      personalIdentifier,
      status: In(ACTIVE_FORM_STATUSES),
    });
    if (evaluationFormTemplate === null) {
      const error = new NotFoundException(
        `טופס עם המזהה ${formId} לא נמצא עבור המשתמש ${personalIdentifier}`,
      );
      this.logger.error(error, this.getByFormId.name);
      throw error;
    }

    return evaluationFormTemplate;
  }

  async getByPersonalIdentifier(
    personalIdentifier: EvaluationFormTemplate['personalIdentifier'],
  ): Promise<EvaluationFormTemplate[]> {
    this.logger.log(
      `Fetching evaluation form templates for user ${personalIdentifier}`,
      this.getByPersonalIdentifier.name,
    );

    return this.repository.findBy({
      personalIdentifier,
      status: In(ACTIVE_FORM_STATUSES),
    });
  }

  async getByWorkId(
    workId: EvaluationFormTemplate['workId'],
    personalIdentifier: EvaluationFormTemplate['personalIdentifier'],
  ): Promise<EvaluationFormTemplate> {
    this.logger.log(
      `Fetching evaluation form template by work ID: ${workId}, for user ${personalIdentifier}`,
      this.getByWorkId.name,
    );

    const evaluationFormTemplate = await this.repository.findOneBy({
      workId,
      personalIdentifier,
      status: In(ACTIVE_FORM_STATUSES),
    });
    if (evaluationFormTemplate === null) {
      const error = new NotFoundException(
        `לא נמצא טופס עם המזהה עבודה ${workId} עבור המשתמש ${personalIdentifier}`,
      );
      this.logger.error(error, this.getByWorkId.name);
      throw error;
    }

    return evaluationFormTemplate;
  }

  getQuestionById(
    form: EvaluationFormTemplate,
    questionId: number,
  ): IPartQuestion {
    this.logger.log(
      `Fetching question by ID: ${questionId} from form with ID: ${form.formId}`,
      this.getQuestionById.name,
    );

    const question = form.object.sections
      ?.flatMap(section => section.parts ?? [])
      .flatMap(part => part.partQuestions ?? [])
      .find(q => q.questionId === questionId);
    if (question === undefined) {
      const error = new NotFoundException(
        `שאלה עם מזהה ${questionId} לא נמצאה בטופס`,
      );
      this.logger.error(error, this.getQuestionById.name);
      throw error;
    }

    return question;
  }

  async submitForm(
    formId: EvaluationFormTemplate['formId'],
    personalIdentifier: EvaluationFormTemplate['personalIdentifier'],
  ): Promise<boolean> {
    this.logger.log(
      `submit form by form ID: ${formId}, for current evaluee ${personalIdentifier}`,
      this.submitForm.name,
    );

    const evaluationFormTemplate = await this.getByFormId(
      formId,
      personalIdentifier,
    );

    evaluationFormTemplate.status = FormStatus.DONE;

    await this.repository.save(evaluationFormTemplate);

    return true;
  }

  async getToExportForms(): Promise<EvaluationFormToExport[]> {
    this.logger.log(
      'Fetching all evaluation forms to export',
      this.getToExportForms.name,
    );

    const evaluationForms = await this.repository.findBy(
      {
        exportedAt: IsNull(),
        status: FormStatus.DONE,
      },
      ['formQuestionAnswers'],
    );

    return evaluationForms.map(form => ({
      formId: form.formId,
      workId: form.workId,
      personalIdentifier: form.personalIdentifier,
      answers:
        form.formQuestionAnswers?.map(answer => ({
          id: answer.id,
          formQuestionId: answer.formQuestionId,
          object: answer.object,
        })) ?? [],
    }));
  }

  async markFormsAsExported(
    formIds: Array<EvaluationFormTemplate['formId']>,
  ): Promise<boolean> {
    this.logger.log(
      `Marking forms as exported with IDs: ${formIds.join(', ')}`,
      this.markFormsAsExported.name,
    );

    const queryRunner = this.dataSource.createQueryRunner();
    return this.transactionService.runInTransaction<boolean>(
      queryRunner,
      async (): Promise<boolean> => {
        const evaluationFormTemplateRepo = queryRunner.manager.getRepository(
          EvaluationFormTemplate,
        );

        const updateResult = await evaluationFormTemplateRepo.update(
          {
            formId: In(formIds),
            status: FormStatus.DONE,
            exportedAt: IsNull(),
          },
          { exportedAt: new Date() },
        );

        if (updateResult.affected !== formIds.length) {
          const error = new BadRequestException(
            `סימון הטפסים כיוצאו לא הצליח.`,
          );
          this.logger.error(error, this.markFormsAsExported.name);
          throw error;
        }

        return true;
      },
    );
  }

  async updateLastVisitedSectionIndex(
    formId: EvaluationFormTemplate['formId'],
    personalIdentifier: EvaluationFormTemplate['personalIdentifier'],
    sectionIndex: number,
  ): Promise<boolean> {
    this.logger.log(
      `Updating last visited section for form id: ${formId}, personal identifier: ${personalIdentifier}, new section index: ${sectionIndex}`,
      this.updateLastVisitedSectionIndex.name,
    );

    const evaluationFormTemplate = await this.getByFormId(
      formId,
      personalIdentifier,
    );

    if (
      evaluationFormTemplate.lastVisitedSectionIndex == null ||
      evaluationFormTemplate.lastVisitedSectionIndex < sectionIndex
    ) {
      evaluationFormTemplate.lastVisitedSectionIndex = sectionIndex;

      await this.repository.save(evaluationFormTemplate);
    }

    return true;
  }

  /**
   * @remarks
   * The `createRandomTemplate` method is intended for development and testing only and should not be used in production environments.
   */
  async createRandomTemplate(
    personalIdentifier: string,
    workId: number,
  ): Promise<EvaluationFormTemplate> {
    const now = new Date();
    const daysAgo = Math.floor(Math.random() * MAX_DAYS_AGO) + 1;
    const createdAt = new Date(now.getTime() - daysAgo * MILLISECONDS_IN_A_DAY);
    const updateAt = new Date(
      createdAt.getTime() +
        Math.floor(Math.random() * (daysAgo + 1)) * MILLISECONDS_IN_A_DAY,
    );
    const form = convertIsoFields(
      exampleData,
      ['createdAt', 'updateAt', 'exportedAt'],
      ['type'],
    );
    const entityData = {
      formId: Math.floor(Math.random() * MAX_ID) + 1,
      personalIdentifier,
      workId,
      object: form.object,
      createdAt,
      updateAt,
      status: FormStatus.NOT_STARTED,
      lastVisitedSectionIndex: null,
      exportedAt: null,
    };

    this.logger.log(
      `Creating random template for ${personalIdentifier} (workId: ${workId})`,
      this.createRandomTemplate.name,
    );

    return this.repository.save(entityData);
  }
}
