import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';
import { createIdProperty } from '@/utils/swagger/input-examples';

export class LastVisitedSectionDTO {
  @IsNumber()
  @IsPositive()
  @ApiProperty(createIdProperty({}))
  lastVisitedSectionIndex: number;
}
