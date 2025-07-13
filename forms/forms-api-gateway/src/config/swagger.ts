import { HttpStatus } from '@nestjs/common';
import { DocumentBuilder } from '@nestjs/swagger';
import { HttpErrorResponseDTO } from '@/common/dtos/http-error-response.dto';

const swaggerOptions = new DocumentBuilder()
  .setTitle('Forms-gateway')
  .setDescription('The gateway API for forms application')
  .setVersion('1.0')
  .addGlobalResponse(
    {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      description: 'Internal server error',
      type: HttpErrorResponseDTO,
    },
    {
      status: HttpStatus.UNAUTHORIZED,
      description: 'Unauthorized',
      type: HttpErrorResponseDTO,
    },
    {
      status: HttpStatus.NOT_FOUND,
      description: 'Not found',
      type: HttpErrorResponseDTO,
    },
    {
      status: HttpStatus.FORBIDDEN,
      description: 'Forbidden',
      type: HttpErrorResponseDTO,
    },
  )
  .build();

export default swaggerOptions;
