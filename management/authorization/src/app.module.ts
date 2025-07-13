import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '@ultra/logger';
import createDBConfig from '@/config/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRootAsync({
      useFactory: () => ({ component: 'AuthorizationService' }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: createDBConfig,
    }),
  ],
})
export class AppModule {}
