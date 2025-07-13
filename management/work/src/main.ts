import { resolve } from 'path';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { configDotenv } from 'dotenv';
import 'dotenv/config';
import { AppModule } from '@/app.module';

configDotenv({
  path: resolve(__dirname, '../../../.env.management'),
});

const DEFAULT_PORT = 3003;

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      port: process.env.WORK_PORT ?? DEFAULT_PORT,
    },
  });

  await app.listen().then(() => {
    Logger.log(
      `Work service is running on ${process.env.WORK_HOST ?? 'localhost'}:${process.env.WORK_PORT ?? DEFAULT_PORT}`,
    );
  });
};
void bootstrap();
