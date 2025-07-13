import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class HttpErrorResponseDTO {
  @ApiProperty({
    enum: HttpStatus,
    example: 'status code (401, 403, 404, 500 ....)',
  })
  statusCode: HttpStatus;

  @ApiProperty({ example: 'Error message' })
  message: string;
}
