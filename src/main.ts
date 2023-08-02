import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //transforma o objeto recebido em um objeto do tipo declarado
      whitelist: true, //retorna somente os campos declarados no objeto
      forbidNonWhitelisted: true, //retorna um erro caso o objeto recebido não tenha os campos declarados
    }),
  );

  await app.listen(3000);
}
bootstrap();
