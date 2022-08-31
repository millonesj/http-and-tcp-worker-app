import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000).then(() => {
    console.log('App is listening');
  });

  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    });

  await microservice.listen().then(() => {
    console.log('Microservice is listening...');
  });
}

bootstrap();
