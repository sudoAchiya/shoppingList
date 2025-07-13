import { QuestionTypeEnum } from '@sikur/enums';
import { IQuestionType } from '@sikur/types';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Question } from '@/question/question.entity';

@Entity()
export class QuestionType implements IQuestionType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: QuestionTypeEnum;

  @Column()
  description: string;

  @OneToMany(() => Question, question => question.questionType)
  questions: Question[];
}
