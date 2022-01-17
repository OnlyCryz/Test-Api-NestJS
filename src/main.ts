import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // No permite Datos extras y lo borra del body // code: 201
      whitelist: true,

      // No permite Datos extras e ignora todo el body // code: 400
      //forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
