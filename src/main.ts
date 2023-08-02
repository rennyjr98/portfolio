import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'client'));
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['GET'],
    credentials: true,
  });
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
