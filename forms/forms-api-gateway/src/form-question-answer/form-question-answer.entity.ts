import { ApiProperty } from '@nestjs/swagger';
import { IFormQuestionAnswer } from '@sikur/types';
import { createJsonTransformer } from '@sikur/utils';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EvaluationFormTemplate } from '@/evaluation-form-template/evaluation-form-template.entity';
import { FormQuestionAnswerValue } from '@/form-question-answer/models/form-question-answer-value.model';

@Entity({ name: 'form_question_answers' })
export class FormQuestionAnswer implements IFormQuestionAnswer {
  constructor(partial: Partial<FormQuestionAnswer>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  formQuestionId: number;

  @Column({
    type: 'clob',
    transformer: createJsonTransformer<FormQuestionAnswerValue>(),
  })
  @ApiProperty({ type: FormQuestionAnswerValue })
  object: FormQuestionAnswerValue;

  @Column()
  @ApiProperty()
  formId: number;

  @ManyToOne(
    () => EvaluationFormTemplate,
    evaluationFormTemplate => evaluationFormTemplate.formQuestionAnswers,
  )
  @JoinColumn({ name: 'form_id' })
  @ApiProperty({ type: () => EvaluationFormTemplate, required: false })
  evaluationFormTemplate?: EvaluationFormTemplate;
}
