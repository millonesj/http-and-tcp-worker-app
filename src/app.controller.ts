import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('greeting-event-pattern')
  getCustomHelloEvent(name: string) {
    const greeting = `Hello ${name}`;
    console.log(greeting);
  }

  @MessagePattern({ cmd: 'greeting-message-pattern' })
  getCustomHelloMessage(name: string) {
    const greeting = `Hello ${name}`;
    console.log(greeting);
    return greeting;
  }
}
