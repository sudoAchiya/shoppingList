import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionDomain } from '@/question-domain/question-domain.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionDomain])],
})
export class QuestionDomainModule {}
