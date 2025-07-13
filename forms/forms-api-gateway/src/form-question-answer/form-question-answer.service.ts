import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FormStatus, QuestionTypeEnum } from '@sikur/enums';
import { TransactionsService } from '@sikur/utils';
import { LoggerService } from '@ultra/logger';
import { DataSource } from 'typeorm';
import { EvaluationFormTemplate } from '@/evaluation-form-template/evaluation-form-template.entity';
import { EvaluationFormTemplateService } from '@/evaluation-form-template/evaluation-form-template.service';
import { FormQuestionAnswerDTO } from '@/form-question-answer/dtos/form-question-answer.dto';
import { FormQuestionAnswer } from '@/form-question-answer/form-question-answer.entity';
import { FormQuestionAnswerRepository } from '@/form-question-answer/form-question-answer.repository';
import { isEnumValue } from '@/utils/validators';

@Injectable()
export class FormQuestionAnswerService {
  constructor(
    private readonly repository: FormQuestionAnswerRepository,
    private readonly evaluationFormTemplateService: EvaluationFormTemplateService,
    private readonly logger: LoggerService,
    private readonly dataSource: DataSource,
    private readonly transactionService: TransactionsService,
  ) {}

  async getById(
    id: FormQuestionAnswer['id'],
    personalIdentifier: EvaluationFormTemplate['personalIdentifier'],
  ): Promise<FormQuestionAnswer> {
    this.logger.log(
      `Fetching answer by id ${id} for personal identifier ${personalIdentifier}`,
      this.getById.name,
    );

    const formQuestionAnswer = await this.repository.findOneBy({
      id,
      evaluationFormTemplate: { personalIdentifier },
    });
    if (formQuestionAnswer === null) {
      const error = new NotFoundException(
        `תשובה לשאלה לא נמצאה עם המזהה ${id}`,
      );
      this.logger.error(error, this.getById.name);
      throw error;
    }

    return formQuestionAnswer;
  }

  async getByFormId(
    formId: FormQuestionAnswer['formId'],
    personalIdentifier: EvaluationFormTemplate['personalIdentifier'],
  ): Promise<FormQuestionAnswer[]> {
    this.logger.log(
      `Fetching all answers for form with ID: ${formId} and personal identifier ${personalIdentifier}`,
      this.getByFormId.name,
    );

    return this.repository.findBy({
      formId,
      evaluationFormTemplate: { personalIdentifier },
    });
  }

  async getByPersonalIdentifier(
    personalIdentifier: EvaluationFormTemplate['personalIdentifier'],
  ): Promise<FormQuestionAnswer[]> {
    this.logger.log(
      `Fetching all answers for personal identifier ${personalIdentifier}`,
      this.getByPersonalIdentifier.name,
    );

    return this.repository.findBy({
      evaluationFormTemplate: { personalIdentifier },
    });
  }

  async answerQuestion(
    { formId, formQuestionId, value }: FormQuestionAnswerDTO,
    personalIdentifier: EvaluationFormTemplate['personalIdentifier'],
  ): Promise<FormQuestionAnswer> {
    this.logger.log(
      `Answering question with formId: ${formId}, formQuestionId: ${formQuestionId}, value: ${value} for personal identifier ${personalIdentifier}`,
      this.answerQuestion.name,
    );

    const form = await this.evaluationFormTemplateService.getByFormId(
      formId,
      personalIdentifier,
    );

    const question = this.evaluationFormTemplateService.getQuestionById(
      form,
      formQuestionId,
    );

    const existingAnswer = await this.repository.findOneBy({
      formId,
      formQuestionId,
    });

    const queryRunner = this.dataSource.createQueryRunner();
    return this.transactionService.runInTransaction<FormQuestionAnswer>(
      queryRunner,
      async (): Promise<FormQuestionAnswer> => {
        const formQuestionAnswerRepo =
          queryRunner.manager.getRepository(FormQuestionAnswer);
        const evaluationFormTemplateRepo = queryRunner.manager.getRepository(
          EvaluationFormTemplate,
        );

        await evaluationFormTemplateRepo.save({
          ...form,
          status: FormStatus.IN_PROGRESS,
        });

        if (existingAnswer !== null) {
          existingAnswer.object.value = value;
          return formQuestionAnswerRepo.save({ ...existingAnswer });
        }
        const questionType = question.question?.questionType?.type;
        if (!isEnumValue(QuestionTypeEnum, questionType)) {
          const error = new BadRequestException(
            `נראה כי השאלה אינה תקינה, שאלה מסוג ${questionType} אינה נתמכת. נא לפנות למנהל הסקר.`,
          );
          this.logger.error(error, this.answerQuestion.name);
          throw error;
        }

        return formQuestionAnswerRepo.save({
          formId,
          formQuestionId,
          object: { questionType, value },
        });
      },
    );
  }

  async deleteById(
    formId: FormQuestionAnswer['formId'],
    formQuestionId: FormQuestionAnswer['formQuestionId'],
    personalIdentifier: EvaluationFormTemplate['personalIdentifier'],
  ): Promise<FormQuestionAnswer> {
    this.logger.log(
      `Deleting answer for formId: ${formId}, formQuestionId: ${formQuestionId} for personal identifier ${personalIdentifier}`,
      this.deleteById.name,
    );

    const formQuestionAnswer = await this.repository.findOneBy({
      formId,
      formQuestionId,
      evaluationFormTemplate: { personalIdentifier },
    });
    if (formQuestionAnswer === null) {
      const error = new NotFoundException(`תשובה לשאלה לא נמצאה`);
      this.logger.error(error, this.deleteById.name);
      throw error;
    }

    return this.repository.delete(formQuestionAnswer);
  }
}
