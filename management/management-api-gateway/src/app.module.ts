import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { LoggerModule } from '@ultra/logger';
import {
  UltraThrottlerGuard,
  UltraThrottlerModule,
} from '@ultra/throttler-guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRootAsync({
      useFactory: () => ({ component: 'ManagementApiGateway' }),
    }),
    UltraThrottlerModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: UltraThrottlerGuard }],
})
export class AppModule {}
