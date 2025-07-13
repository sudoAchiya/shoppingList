import { IQuestion } from '@sikur/types';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Column,
} from 'typeorm';
import { Answer } from '@/answer/answer.entity';
import { PartQuestion } from '@/part-question/part-question.entity';
import { QuestionContent } from '@/question-content/question-content.entity';
import { QuestionToQuestionDomain } from '@/question-to-question-domain/question-to-question-domain.entity';
import { QuestionType } from '@/question-type/question-type.entity';

@Entity()
export class Question implements IQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => QuestionType, questionType => questionType.questions)
  @JoinColumn({ name: 'question_type_id' })
  questionType: QuestionType;

  @Column()
  questionTypeId: number;

  @OneToMany(() => QuestionContent, questionContent => questionContent.question)
  contents: QuestionContent[];

  @OneToMany(() => Answer, answer => answer.question)
  answers: Answer[];

  @OneToMany(
    () => QuestionToQuestionDomain,
    questionToQuestionDomain => questionToQuestionDomain.question,
  )
  domains: QuestionToQuestionDomain[];

  @OneToMany(() => PartQuestion, partQuestion => partQuestion.question)
  partQuestions?: PartQuestion[];
}
