import { IQuestion } from '@sikur/types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Answer } from '@/entities/answer.entity';
import { PartQuestion } from '@/entities/part-question.entity';
import { QuestionContent } from '@/entities/question-content.entity';
import { QuestionToQuestionDomain } from '@/entities/question-to-question-domain.entity';
import { QuestionType } from '@/entities/question-type.entity';

@Entity({ name: 'questions' })
export class Question implements IQuestion {
  constructor(partial: Partial<Question>) {
    Object.assign(this, partial);
  }

  @PrimaryColumn()
  id: number;

  @Column()
  questionTypeId: number;

  @ManyToOne(() => QuestionType, questionType => questionType.questions)
  @JoinColumn({ name: 'question_type_id' })
  questionType?: QuestionType;

  @OneToMany(() => Answer, answer => answer.question)
  answers?: Answer[];

  @OneToMany(() => QuestionContent, questionContent => questionContent.question)
  questionContents?: QuestionContent[];

  @OneToMany(() => PartQuestion, partQuestion => partQuestion.question)
  partQuestions?: PartQuestion[];

  @OneToMany(
    () => QuestionToQuestionDomain,
    questionToQuestionDomain => questionToQuestionDomain.question,
  )
  questionToQuestionDomains?: QuestionToQuestionDomain[];
}
