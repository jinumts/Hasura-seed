import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

interface HasuraActionsPayload<Input extends {} = {}, Session extends {} = {}> {
  action: {
    name: string;
  };
  input: Input;
  session_variables: Session;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  postHello(@Body() payload: HasuraActionsPayload<{ params: {} }>) {
    console.log('12345645612', payload);
    return {
      accessToken: 'test',
    };
  }
}
