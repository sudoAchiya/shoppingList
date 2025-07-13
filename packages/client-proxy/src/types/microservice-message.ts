export interface MicroserviceMessagePayload<T> {
  data: T;
  context: MicroserviceMessageContext;
}

export interface MicroserviceMessage<T> {
  payload: MicroserviceMessagePayload<T>;
  pattern: MicroserviceMessagePattern;
}

export interface MicroserviceMessagePattern {
  cmd: string;
  version: string;
}

export interface MicroserviceMessageContext {
  requestId: string;
  ip?: string;
  userAgent?: string;
  callingServiceName: string;
}
