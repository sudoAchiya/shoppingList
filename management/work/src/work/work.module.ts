import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Work } from '@/work/work.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Work])],
})
export class WorkModule {}
