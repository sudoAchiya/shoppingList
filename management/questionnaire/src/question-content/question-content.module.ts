import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionContent } from '@/question-content/question-content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionContent])],
})
export class QuestionContentModule {}
