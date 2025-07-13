import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '@ultra/logger';
import createDBConfig from '@/config/data-source';
import { RespondentModule } from '@/respondent/respondent.module';
import { WorkModule } from '@/work/work.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRootAsync({
      useFactory: () => ({ component: 'WorkService' }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: createDBConfig,
    }),
    RespondentModule,
    WorkModule,
  ],
})
export class AppModule {}
