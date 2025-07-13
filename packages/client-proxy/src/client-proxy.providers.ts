import type { ClientProxy } from '@nestjs/microservices';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import {
  CLIENT_PROXY_SERVICE_TOKEN,
  SENDER_SERVICE_NAME,
} from '@/client-proxy.consts';
import type { UltraClientProxyModuleOptions } from '@/client-proxy.module';
import type { UltraClientProxyService } from '@/client-proxy.service';

interface ClientProxyInjectProvider {
  provide: string;
  useFactory: (options: UltraClientProxyModuleOptions) => ClientProxy;
  inject: string[];
}

interface SenderServiceNameProvider {
  provide: string;
  useFactory: (options: UltraClientProxyModuleOptions) => string;
  inject: string[];
}

interface ClientProxyServiceProvider {
  provide: string;
  useClass: typeof UltraClientProxyService;
}

type ClientProxyProviders = Array<
  | ClientProxyInjectProvider
  | SenderServiceNameProvider
  | ClientProxyServiceProvider
>;

export function createClientProxyProviders(
  optionsToken: string,
): ClientProxyProviders {
  return [
    {
      provide: CLIENT_PROXY_SERVICE_TOKEN,
      useFactory: (options: UltraClientProxyModuleOptions) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: options.host,
            port: options.port,
          },
        });
      },
      inject: [optionsToken],
    },
    {
      provide: SENDER_SERVICE_NAME,
      useFactory: (options: UltraClientProxyModuleOptions): string =>
        options.senderServiceName,
      inject: [optionsToken],
    },
  ];
}
