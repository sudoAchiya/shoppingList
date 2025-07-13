import type { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const createDBConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'oracle',
  host: configService.get<string>('DB_HOST'),
  port: Number(configService.get<string>('DB_PORT')),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  sid: configService.get<string>('DB_SID'),
  synchronize: configService.get<string>('DB_SYNC') === 'true',
  logging: configService.get('DB_LOGGING') === 'true',
  extra: {
    ssl: configService.get('DB_SECURE') === 'true',
  },
  entities: ['dist/**/*.entity.js'],
  autoLoadEntities: true,
  namingStrategy: new SnakeNamingStrategy(),
});

export default createDBConfig;
