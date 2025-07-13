import type { ValueTransformer } from 'typeorm';

export interface JsonValueTransformer<T> extends ValueTransformer {
  to: (value: T | null) => string | null;
  from: (value: string | null) => T | null;
}

export const createJsonTransformer = <T>(): JsonValueTransformer<T> => ({
  to: (value: T | null): string | null =>
    value !== null && value !== undefined ? JSON.stringify(value) : null,
  from: (value: string | null): T | null =>
    value !== null ? JSON.parse(value) : null,
});
