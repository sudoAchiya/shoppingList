import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { FormQuestionAnswer } from '@/form-question-answer/form-question-answer.entity';

@Injectable()
export class FormQuestionAnswerRepository {
  constructor(
    @InjectRepository(FormQuestionAnswer)
    private readonly dataSourceRepo: Repository<FormQuestionAnswer>,
  ) {}

  async findBy(
    where: FindOptionsWhere<FormQuestionAnswer>,
    relations: string[] = [],
  ): Promise<FormQuestionAnswer[]> {
    return this.dataSourceRepo.find({ where, relations });
  }

  async findOneBy(
    where: FindOptionsWhere<FormQuestionAnswer>,
    relations: string[] = [],
  ): Promise<FormQuestionAnswer | null> {
    return this.dataSourceRepo.findOne({ where, relations });
  }

  async update(
    formQuestionAnswer: FormQuestionAnswer,
  ): Promise<FormQuestionAnswer> {
    return this.dataSourceRepo.save(formQuestionAnswer);
  }

  async delete(
    formQuestionAnswer: FormQuestionAnswer,
  ): Promise<FormQuestionAnswer> {
    return this.dataSourceRepo.remove(formQuestionAnswer);
  }
}
