import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '@ultra/logger';
import createDBConfig from '@/config/data-source';

@Module({
  imports: [
    LoggerModule.forRootAsync({
      useFactory: () => ({ component: 'QuestionnaireService' }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: createDBConfig,
    }),
  ],
})
export class AppModule {}
