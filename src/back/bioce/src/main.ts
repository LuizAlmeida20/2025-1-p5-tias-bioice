import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import 'dotenv

async function bootstrap() {
<<<<<<< Updated upstream
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3000',
      methods: 'GET, HEAD, OPTIONS, POST, PUT, PATCH, DELETE',
      allowedHeaders: 'Content-Type, Accept, Authorization',
      credentials: true
    }
=======
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
>>>>>>> Stashed changes
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(Number(process.env.PORT));
}
bootstrap();
