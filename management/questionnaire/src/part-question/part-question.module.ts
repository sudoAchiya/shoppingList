import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartQuestion } from '@/part-question/part-question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PartQuestion])],
})
export class PartQuestionModule {}
