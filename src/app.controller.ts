import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDto } from './dto/message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sendEmail(@Body() messageDto: MessageDto) {
    return this.appService.sendMail(messageDto);
  }
}
