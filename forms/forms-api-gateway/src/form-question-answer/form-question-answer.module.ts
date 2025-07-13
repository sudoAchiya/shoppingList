import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationFormTemplateModule } from '@/evaluation-form-template/evaluation-form-template.module';
import { FormQuestionAnswerController } from '@/form-question-answer/form-question-answer.controller';
import { FormQuestionAnswer } from '@/form-question-answer/form-question-answer.entity';
import { FormQuestionAnswerRepository } from '@/form-question-answer/form-question-answer.repository';
import { FormQuestionAnswerService } from '@/form-question-answer/form-question-answer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([FormQuestionAnswer]),
    EvaluationFormTemplateModule,
  ],
  controllers: [FormQuestionAnswerController],
  providers: [FormQuestionAnswerService, FormQuestionAnswerRepository],
  exports: [FormQuestionAnswerService, FormQuestionAnswerRepository],
})
export class FormQuestionAnswerModule {}
