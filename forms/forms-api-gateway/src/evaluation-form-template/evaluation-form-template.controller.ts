import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { Public } from '@ultra/sso';
import { LastVisitedSectionDTO } from './dtos/last-visited-section.dto';
import { CurrentConnectedUser } from '@/auth/models/connected-user.model';
import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { ExporterGuard } from '@/common/guards/exporter.guard';
import { ExportedFormsDTO } from '@/evaluation-form-template/dtos/exported-forms.dto';
import { EvaluationFormTemplate } from '@/evaluation-form-template/evaluation-form-template.entity';
import { EvaluationFormTemplateService } from '@/evaluation-form-template/evaluation-form-template.service';
import { EvaluationFormToExport } from '@/form-question-answer/models/form-to-export.model';
import { createFormIdApiParamProperty } from '@/utils/swagger/input-examples';

@Controller('evaluation-form-templates')
export class EvaluationFormTemplateController {
  constructor(private readonly service: EvaluationFormTemplateService) {}

  @Get('by-evaluee')
  @ApiOkResponse({ type: [EvaluationFormTemplate] })
  async getEvaluationFormTemplatesByEvaluee(
    @CurrentUser() user: CurrentConnectedUser,
  ): Promise<EvaluationFormTemplate[]> {
    return this.service.getByPersonalIdentifier(user.personalIdentifier);
  }

  @Get('by-work-id/:workId')
  @ApiOkResponse({ type: EvaluationFormTemplate })
  @ApiParam({
    name: 'workId',
    type: Number,
    description: 'Id of the work to fetch evaluation form templates for',
  })
  async getEvaluationFormTemplatesByWorkId(
    @CurrentUser() user: CurrentConnectedUser,
    @Param('workId') workId: EvaluationFormTemplate['workId'],
  ): Promise<EvaluationFormTemplate> {
    return this.service.getByWorkId(workId, user.personalIdentifier);
  }

  @Get('to-export')
  @Public()
  @UseGuards(ExporterGuard)
  @ApiOkResponse({ type: [EvaluationFormToExport] })
  async toExport(): Promise<EvaluationFormToExport[]> {
    return this.service.getToExportForms();
  }

  @Patch('exported')
  @Public()
  @UseGuards(ExporterGuard)
  @ApiOkResponse({ type: Boolean })
  async exported(@Body() exportedFormsDTO: ExportedFormsDTO): Promise<boolean> {
    return this.service.markFormsAsExported(exportedFormsDTO.formIds);
  }

  @Patch('last-visited-section/:formId')
  @ApiOkResponse({ type: Boolean })
  @ApiParam(createFormIdApiParamProperty())
  async updateLastVisitedSection(
    @CurrentUser() user: CurrentConnectedUser,
    @Param('formId') formId: EvaluationFormTemplate['formId'],
    @Body() lastVisitedSectionDTO: LastVisitedSectionDTO,
  ): Promise<boolean> {
    return this.service.updateLastVisitedSectionIndex(
      formId,
      user.personalIdentifier,
      lastVisitedSectionDTO.lastVisitedSectionIndex,
    );
  }

  @Get(':formId')
  @ApiOkResponse({ type: EvaluationFormTemplate })
  @ApiParam(createFormIdApiParamProperty())
  async getEvaluationFormTemplate(
    @CurrentUser() user: CurrentConnectedUser,
    @Param('formId') formId: EvaluationFormTemplate['formId'],
  ): Promise<EvaluationFormTemplate> {
    return this.service.getByFormId(formId, user.personalIdentifier);
  }

  @Post('submit-form/:formId')
  @ApiCreatedResponse({ type: Boolean })
  @ApiParam(createFormIdApiParamProperty())
  async submitForm(
    @CurrentUser() user: CurrentConnectedUser,
    @Param('formId') formId: EvaluationFormTemplate['formId'],
  ): Promise<boolean> {
    return this.service.submitForm(formId, user.personalIdentifier);
  }

  /**
   * @remarks
   * The `createRandomTemplate` method is intended for development and testing only and should not be used in production environments.
   */
  @Post('create-random-template/:workId')
  @ApiCreatedResponse({ type: EvaluationFormTemplate })
  @ApiParam({ name: 'workId', type: Number, required: true })
  @ApiQuery({ name: 'personalIdentifier', type: String, required: true })
  async createRandomTemplate(
    @Query('personalIdentifier') personalIdentifier: string,
    @Param('workId') workId: number,
  ): Promise<EvaluationFormTemplate> {
    return this.service.createRandomTemplate(personalIdentifier, workId);
  }
}
