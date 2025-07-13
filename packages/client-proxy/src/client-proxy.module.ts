import {
  DynamicModule,
  InjectionToken,
  Module,
  Provider,
} from '@nestjs/common';
import { ClsModule } from 'nestjs-cls';
import { ULTRA_CLIENT_PROXY_OPTIONS } from '@/client-proxy.consts';
import { createClientProxyProviders } from '@/client-proxy.providers';
import { UltraClientProxyService } from '@/client-proxy.service';

export interface UltraClientProxyModuleOptions {
  host: string;
  port: number;
  senderServiceName: string;
}

export interface UltraClientProxyAsyncModuleOptions
  extends Pick<DynamicModule, 'imports'> {
  inject?: any[];
  useFactory: (
    ...args: any[]
  ) => Promise<UltraClientProxyModuleOptions> | UltraClientProxyModuleOptions;
  receivingServiceToken: InjectionToken;
}

@Module({})
export class UltraClientProxyModule {
  static forRootAsync(
    options: UltraClientProxyAsyncModuleOptions,
  ): DynamicModule {
    const serviceProvider: Provider = {
      useClass: UltraClientProxyService,
      provide: options.receivingServiceToken,
    };
    return {
      module: UltraClientProxyModule,
      imports: [
        ...(options.imports ?? []),
        ClsModule.forRoot({
          global: true,
          middleware: {
            mount: true,
            saveReq: true,
          },
        }),
      ],
      providers: [
        {
          provide: ULTRA_CLIENT_PROXY_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject ?? [],
        },
        ...createClientProxyProviders(ULTRA_CLIENT_PROXY_OPTIONS),
        serviceProvider,
      ],
      exports: [serviceProvider],
    };
  }
}
