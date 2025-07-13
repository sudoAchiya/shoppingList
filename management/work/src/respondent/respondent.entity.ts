import { FormStatus, FormResponseType } from '@sikur/enums';
import { IRespondent } from '@sikur/types';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RespondentInformation } from '@/respondent/respondent-information.entity';
import { Work } from '@/work/work.entity';

@Entity({ name: 'respondents' })
export class Respondent implements IRespondent {
  constructor(partial: Partial<Respondent>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  workId: number;

  @Column()
  personalIdentifier: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @Column()
  responseType: FormResponseType;

  @Column()
  responseStatus: FormStatus;

  @ManyToOne(() => Work, work => work.respondents)
  @JoinColumn({ name: 'work_id' })
  work: Work;

  @OneToOne(() => RespondentInformation, info => info.respondent)
  info: RespondentInformation;
}
