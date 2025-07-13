import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from '@ultra/logger';
import { TransactionsService } from '@/transactions/transaction.service';

@Global()
@Module({
  imports: [ConfigModule.forRoot(), LoggerModule],
  providers: [TransactionsService],
  exports: [TransactionsService],
})
export class TransactionsModule {}
