import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3000',
      methods: 'GET, HEAD, OPTIONS, POST, PUT, PATCH, DELETE',
      allowedHeaders: 'Content-Type, Accept, Authorization',
      credentials: true
    }
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(3000);
}
bootstrap();
