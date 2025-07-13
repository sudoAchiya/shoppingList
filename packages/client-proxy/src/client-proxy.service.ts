import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import type { Request } from 'express';
import { CLS_REQ, ClsService } from 'nestjs-cls';
import { Observable } from 'rxjs';
import {
  CLIENT_PROXY_SERVICE_TOKEN,
  SENDER_SERVICE_NAME,
} from '@/client-proxy.consts';
import {
  MicroserviceMessageContext,
  MicroserviceMessagePayload,
} from '@/types/microservice-message';

@Injectable()
export class UltraClientProxyService {
  constructor(
    @Inject(CLIENT_PROXY_SERVICE_TOKEN) private readonly client: ClientProxy,
    @Inject(SENDER_SERVICE_NAME) private readonly serviceName: string,
    private readonly clsService: ClsService,
  ) {}

  private extractContextFromRequest(
    request: Request,
  ): MicroserviceMessageContext {
    const { headers, ip } = request;

    const { 'user-agent': userAgent } = headers;

    return {
      requestId: this.clsService.getId(),
      ip,
      userAgent,
      callingServiceName: this.serviceName,
    };
  }

  send<K>(
    cmd: string,
    version: string,
    data: unknown,
    context?: MicroserviceMessageContext,
  ): Observable<K> {
    context ??= this.extractContextFromRequest(this.clsService.get(CLS_REQ));

    const payload: MicroserviceMessagePayload<unknown> = {
      data,
      context,
    };

    return this.client.send<K, MicroserviceMessagePayload<unknown>>(
      { cmd, version },
      payload,
    );
  }
  async close(): Promise<void> {
    await this.client.close();
  }
}
