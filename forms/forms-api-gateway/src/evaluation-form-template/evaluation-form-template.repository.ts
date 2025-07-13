import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { EvaluationFormTemplate } from '@/evaluation-form-template/evaluation-form-template.entity';

@Injectable()
export class EvaluationFormTemplateRepository {
  constructor(
    @InjectRepository(EvaluationFormTemplate)
    private readonly dataSourceRepo: Repository<EvaluationFormTemplate>,
  ) {}

  async findBy(
    where: FindOptionsWhere<EvaluationFormTemplate>,
    relations: string[] = [],
  ): Promise<EvaluationFormTemplate[]> {
    return this.dataSourceRepo.find({ where, relations });
  }

  async findOneBy(
    where: FindOptionsWhere<EvaluationFormTemplate>,
    relations: string[] = [],
  ): Promise<EvaluationFormTemplate | null> {
    return this.dataSourceRepo.findOne({ where, relations });
  }

  async save(
    evaluationFormTemplate: EvaluationFormTemplate,
  ): Promise<EvaluationFormTemplate> {
    return this.dataSourceRepo.save(evaluationFormTemplate);
  }
}
