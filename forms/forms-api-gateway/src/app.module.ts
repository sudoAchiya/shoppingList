import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from '@sikur/utils';
import { EnvironmentCheckMiddleware } from '@ultra/environment-check-middleware';
import { LoggerModule, LoggerService } from '@ultra/logger';
import {
  UltraThrottlerModule,
  UltraThrottlerGuard,
} from '@ultra/throttler-guard';
import { AuthModule } from '@/auth/auth.module';
import { UserInterceptor } from '@/common/interceptors/user.interceptor';
import createDBConfig from '@/config/dataSource';
import { EvaluationFormTemplateModule } from '@/evaluation-form-template/evaluation-form-template.module';
import { FormQuestionAnswerModule } from '@/form-question-answer/form-question-answer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: createDBConfig,
    }),
    LoggerModule.forRootAsync({
      useFactory: () => ({ component: 'FormsApiGateway' }),
    }),
    UltraThrottlerModule,
    TransactionsModule,
    AuthModule,
    EvaluationFormTemplateModule,
    FormQuestionAnswerModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: UltraThrottlerGuard },
    { provide: APP_INTERCEPTOR, useClass: UserInterceptor },
  ],
})
export class AppModule implements NestModule {
  constructor(
    private readonly loggingService: LoggerService,
    private readonly configService: ConfigService,
  ) {}

  configure(consumer: MiddlewareConsumer): void {
    this.configService.get('NODE_ENV') !== 'development' &&
      consumer
        .apply(EnvironmentCheckMiddleware(this.loggingService))
        .exclude({ path: 'auth/*', method: RequestMethod.ALL })
        .exclude({ path: 'sso/*', method: RequestMethod.ALL })
        .forRoutes('*');
  }
}
