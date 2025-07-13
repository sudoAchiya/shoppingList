import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from '@/form/form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Form])],
})
export class FormModule {}
