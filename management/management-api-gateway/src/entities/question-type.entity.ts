import { QuestionTypeEnum } from '@sikur/enums';
import { IQuestionType } from '@sikur/types';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Question } from '@/entities/question.entity';

@Entity({ name: 'question_types' })
export class QuestionType implements IQuestionType {
  constructor(partial: Partial<QuestionType>) {
    Object.assign(this, partial);
  }

  @PrimaryColumn()
  id: number;

  @Column()
  type: QuestionTypeEnum;

  @Column()
  description: string;

  @OneToMany(() => Question, question => question.questionType)
  questions?: Question[];
}
