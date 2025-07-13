import type { ApiPropertyOptions, ApiParamOptions } from '@nestjs/swagger';
import { type BasicApiPropertyInput, createApiProperty } from '@ultra/common';

export const createIdProperty = ({
  description = 'id',
  type = 'integer',
  example,
}: BasicApiPropertyInput): ApiPropertyOptions =>
  createApiProperty({
    description,
    type,
    example,
  });

export const createFormIdApiParamProperty = (): ApiParamOptions => ({
  name: 'formId',
  type: Number,
  description: 'Id of the form',
});
