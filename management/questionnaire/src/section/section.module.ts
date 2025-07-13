import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from '@/section/section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Section])],
})
export class SectionModule {}
