import { Controller, Module, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  getRootRoute() {
    return 'Hi there!';
  }
}
