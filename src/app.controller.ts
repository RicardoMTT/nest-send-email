import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDto } from './dto/message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  async sendEmail(@Body() messageDto: MessageDto) {
    try {
      const result =  await this.appService.sendMail(messageDto);
      return {
        success:true,
        message:result.msg
      }
    } catch (error) {
      return {
        success:false,
        message:'Error en el servidor'
      }
    }
  }
}
