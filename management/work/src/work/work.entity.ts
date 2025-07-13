import { NotifyRule } from '@sikur/enums';
import { IWork } from '@sikur/types';
import { createJsonTransformer } from '@sikur/utils';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Respondent } from '@/respondent/respondent.entity';
import { FieldDefinition } from '@/work/models/field-definition.mode';

@Entity({ name: 'works' })
export class Work implements IWork {
  constructor(partial: Partial<Work>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  formId: number;

  @Column()
  organizationId: string;

  @Column({ type: 'timestamp with time zone' })
  createdAt: Date;

  @Column({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @Column({ type: 'timestamp with time zone' })
  startAt: Date;

  @Column({ type: 'timestamp with time zone' })
  endAt: Date;

  @Column()
  isPublished: boolean;

  @Column()
  year: number;

  @Column()
  notifyRule: NotifyRule;

  @Column({ type: 'timestamp with time zone', nullable: true })
  notifyDate: Date | null;

  @Column({
    type: 'clob',
    transformer: createJsonTransformer<FieldDefinition[]>(),
  })
  fieldDefinitions: FieldDefinition[];

  @OneToMany(() => Respondent, respondent => respondent.work)
  respondents?: Respondent[];
}
