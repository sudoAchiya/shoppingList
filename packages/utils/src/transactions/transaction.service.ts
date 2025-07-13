import { Injectable } from '@nestjs/common';
import { LoggerService } from '@ultra/logger';
import { QueryRunner } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(private readonly logger: LoggerService) {}

  async runInTransaction<T>(
    queryRunner: QueryRunner,
    mainFunction: () => Promise<T>,
  ): Promise<T> {
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const result = await mainFunction();
      await queryRunner.commitTransaction();

      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      this.logger.error(error as Error, this.runInTransaction.name, {
        message: 'Transaction failed, rolling back',
      });

      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
