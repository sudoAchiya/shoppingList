import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationFormTemplateController } from '@/evaluation-form-template/evaluation-form-template.controller';
import { EvaluationFormTemplate } from '@/evaluation-form-template/evaluation-form-template.entity';
import { EvaluationFormTemplateRepository } from '@/evaluation-form-template/evaluation-form-template.repository';
import { EvaluationFormTemplateService } from '@/evaluation-form-template/evaluation-form-template.service';

@Module({
  imports: [TypeOrmModule.forFeature([EvaluationFormTemplate])],
  controllers: [EvaluationFormTemplateController],
  providers: [EvaluationFormTemplateService, EvaluationFormTemplateRepository],
  exports: [EvaluationFormTemplateService, EvaluationFormTemplateRepository],
})
export class EvaluationFormTemplateModule {}
