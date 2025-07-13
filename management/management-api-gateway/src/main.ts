import { resolve } from 'path';
import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { configDotenv } from 'dotenv';
import 'dotenv/config';
import { AppModule } from '@/app.module';
import options from '@/config/swagger';

configDotenv({
  path: resolve(__dirname, '../../../.env.management'),
});

const DEFAULT_PORT = 3000;

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });

  if (process.env.NODE_ENV !== 'production') {
    const documentFactory = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, documentFactory);
  }

  app.enableCors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  });

  await app.listen(process.env.GATEWAY_PORT ?? DEFAULT_PORT, () => {
    Logger.log(
      `Gateway is running on http://${process.env.GATEWAY_HOST ?? 'localhost'}:${process.env.GATEWAY_PORT ?? DEFAULT_PORT}`,
    );
  });
};
void bootstrap();
