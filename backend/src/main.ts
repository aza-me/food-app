import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const PORT = process.env.PORT || 9000;
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  await app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
  });
}
bootstrap();
