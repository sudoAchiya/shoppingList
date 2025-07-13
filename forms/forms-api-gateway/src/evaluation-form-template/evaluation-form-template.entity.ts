import { ApiProperty } from '@nestjs/swagger';
import { FormStatus } from '@sikur/enums';
import { IEvaluationFormTemplate } from '@sikur/types';
import { createJsonTransformer } from '@sikur/utils';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Form } from '@/evaluation-form-template/models/form.model';
import { FormQuestionAnswer } from '@/form-question-answer/form-question-answer.entity';

@Entity({ name: 'evaluation_form_templates' })
export class EvaluationFormTemplate implements IEvaluationFormTemplate {
  constructor(partial: Partial<EvaluationFormTemplate>) {
    Object.assign(this, partial);
  }

  @PrimaryColumn()
  @ApiProperty()
  formId: number;

  @Column()
  @ApiProperty()
  personalIdentifier: string;

  @Column()
  @ApiProperty()
  workId: number;

  @Column({
    type: 'clob',
    transformer: createJsonTransformer<Form>(),
  })
  @ApiProperty({ type: Form })
  object: Form;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  @ApiProperty({ type: 'string', format: 'date-time' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  @ApiProperty({ type: 'string', format: 'date-time' })
  updateAt: Date;

  @Column({ default: FormStatus.NOT_STARTED })
  @ApiProperty({ enum: FormStatus })
  status: FormStatus;

  @Column({ type: 'timestamp with time zone', nullable: true })
  @ApiProperty({ type: 'string', format: 'date-time', required: false })
  exportedAt: Date | null;

  @Column({ type: 'number', nullable: true })
  @ApiProperty({ type: Number, required: false })
  lastVisitedSectionIndex: number | null;

  @OneToMany(
    () => FormQuestionAnswer,
    formQuestionAnswer => formQuestionAnswer.evaluationFormTemplate,
  )
  @ApiProperty({ type: () => [FormQuestionAnswer], required: false })
  formQuestionAnswers?: FormQuestionAnswer[];
}
