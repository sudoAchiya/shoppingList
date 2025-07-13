import { IRespondentInformation } from '@sikur/types';
import { createJsonTransformer } from '@sikur/utils';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Respondent } from './respondent.entity';

@Entity({ name: 'respondents_information' })
export class RespondentInformation implements IRespondentInformation {
  constructor(partial: Partial<RespondentInformation>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  respondentId: number;

  @Column()
  personalIdentifier: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  rankCode: number;

  @Column({ type: 'timestamp with time zone' })
  birthDate: Date;

  @Column()
  organizationId: string;

  @Column()
  emergencyPlacement: string;

  @Column({
    type: 'clob',
    transformer: createJsonTransformer<Record<string, any>>(),
  })
  extraFields: Record<string, any>;

  @OneToOne(() => Respondent, respondent => respondent.info)
  @JoinColumn({ name: 'respondent_id' })
  respondent: Respondent;
}
