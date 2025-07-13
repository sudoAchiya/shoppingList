# Client proxy

## Purpose

This package provides a client proxy module and service to send requests to microservices

## Installation

```bash
npm install @sikur/client-proxy
```

## Usage

#### **`product.module.ts`**

```typescript
import { SikurClientProxyModule } from '@sikur/client-proxy';

@Module({
  imports: [
    SikurClientProxyModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          host: configService.get('HOST') || '',
          port: +configService.get('PORT'),
          senderServiceName: 'name',
        };
      },
      receivingServiceToken: 'INJECTION_TOKEN',
    }),
  ],
})
export class ProductModule {}
```

#### **`product.service.ts`**

```typescript
import { Inject, Injectable } from '@nestjs/common';
import { SikurClientProxyService } from '@sikur/client-proxy';

@Injectable()
export class ProductService {
  constructor(
    @Inject('INJECTION_TOKEN')
    private readonly sikurClientProxyService: SikurClientProxyService,
  ) {}
  getHello(): string {
    const data = { test: 'Hello world' };
    this.sikurClientProxyService.send('cmdString', 'version', data);
    return 'Hello World!';
  }
}
```
