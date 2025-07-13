import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { CurrentConnectedUser } from '@/auth/models/connected-user.model';
import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { FormQuestionAnswerDTO } from '@/form-question-answer/dtos/form-question-answer.dto';
import { FormQuestionAnswer } from '@/form-question-answer/form-question-answer.entity';
import { FormQuestionAnswerService } from '@/form-question-answer/form-question-answer.service';
import { createFormIdApiParamProperty } from '@/utils/swagger/input-examples';

@Controller('form-question-answers')
export class FormQuestionAnswerController {
  constructor(
    private readonly formQuestionAnswerService: FormQuestionAnswerService,
  ) {}

  @Get('by-form/:formId')
  @ApiOkResponse({ type: [FormQuestionAnswer] })
  @ApiParam(createFormIdApiParamProperty())
  async getAllAnswersByFormId(
    @CurrentUser() user: CurrentConnectedUser,
    @Param('formId') formId: FormQuestionAnswer['formId'],
  ): Promise<FormQuestionAnswer[]> {
    return this.formQuestionAnswerService.getByFormId(
      formId,
      user.personalIdentifier,
    );
  }

  @Get('by-evaluee')
  @ApiOkResponse({ type: [FormQuestionAnswer] })
  async getAllAnswersByEvaluee(
    @CurrentUser() user: CurrentConnectedUser,
  ): Promise<FormQuestionAnswer[]> {
    return this.formQuestionAnswerService.getByPersonalIdentifier(
      user.personalIdentifier,
    );
  }

  @Get(':id')
  @ApiOkResponse({ type: FormQuestionAnswer })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Id of the formQuestionAnswer',
  })
  async getFormQuestionAnswer(
    @CurrentUser() user: CurrentConnectedUser,
    @Param('id') id: FormQuestionAnswer['id'],
  ): Promise<FormQuestionAnswer> {
    return this.formQuestionAnswerService.getById(id, user.personalIdentifier);
  }

  @Post()
  @ApiCreatedResponse({ type: FormQuestionAnswer })
  async answerForQuestion(
    @CurrentUser() user: CurrentConnectedUser,
    @Body() formQuestionAnswerDto: FormQuestionAnswerDTO,
  ): Promise<FormQuestionAnswer> {
    return this.formQuestionAnswerService.answerQuestion(
      formQuestionAnswerDto,
      user.personalIdentifier,
    );
  }

  @Delete('/forms/:formId/questions/:formQuestionId')
  @ApiOkResponse({ type: FormQuestionAnswer })
  @ApiParam(createFormIdApiParamProperty())
  @ApiParam({
    name: 'formQuestionId',
    type: Number,
    description: 'Id of the formQuestion',
  })
  async deleteFormQuestionAnswer(
    @CurrentUser() user: CurrentConnectedUser,
    @Param('formId') formId: FormQuestionAnswer['formId'],
    @Param('formQuestionId')
    formQuestionId: FormQuestionAnswer['formQuestionId'],
  ): Promise<FormQuestionAnswer> {
    return this.formQuestionAnswerService.deleteById(
      formId,
      formQuestionId,
      user.personalIdentifier,
    );
  }
}
