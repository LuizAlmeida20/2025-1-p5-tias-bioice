import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.ORIGIN,
      methods: 'GET, HEAD, OPTIONS, POST, PUT, PATCH, DELETE',
      allowedHeaders: 'Content-Type, Accept, Authorization',
      credentials: true
    }
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(Number(process.env.PORT));
}
bootstrap();
