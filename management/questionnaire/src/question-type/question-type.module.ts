import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionType } from '@/question-type/question-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionType])],
})
export class QuestionTypeModule {}
