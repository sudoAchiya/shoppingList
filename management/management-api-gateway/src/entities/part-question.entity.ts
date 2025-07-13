import { IPartQuestion } from '@sikur/types';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Part } from '@/entities/part.entity';
import { Question } from '@/entities/question.entity';

@Entity({ name: 'part_questions' })
export class PartQuestion implements IPartQuestion {
  constructor(partial: Partial<PartQuestion>) {
    Object.assign(this, partial);
  }

  @Column()
  index: number;

  @PrimaryColumn()
  questionId: number;

  @PrimaryColumn()
  partId: number;

  @ManyToOne(() => Part, part => part.partQuestions)
  @JoinColumn({ name: 'part_id' })
  part?: Part;

  @ManyToOne(() => Question, question => question.partQuestions)
  @JoinColumn({ name: 'question_id' })
  question?: Question;
}
