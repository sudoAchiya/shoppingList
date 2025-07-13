import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespondentInformation } from '@/respondent/respondent-information.entity';
import { Respondent } from '@/respondent/respondent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Respondent, RespondentInformation])],
})
export class RespondentModule {}
