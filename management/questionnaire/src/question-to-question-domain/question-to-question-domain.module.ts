import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionToQuestionDomain } from '@/question-to-question-domain/question-to-question-domain.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionToQuestionDomain])],
})
export class QuestionToQuestionDomainModule {}
