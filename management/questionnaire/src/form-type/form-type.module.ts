import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormType } from '@/form-type/form-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FormType])],
})
export class FormTypeModule {}
