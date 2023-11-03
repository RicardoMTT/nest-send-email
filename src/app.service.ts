import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}



  async sendMail(messageDto: MessageDto) {
    try {
      await this.mailerService
      .sendMail({
        to: messageDto.to,
        from: messageDto.from,
        subject: messageDto.subject,
        text: messageDto.text,
        template:"./confirmation.hbs",
        context:{
          name:messageDto.name,
          url:'https://www.google.com/'
        }
      })

     
      return {
        msg:"Correo enviado satisfactoriamente"
      }
    } catch (error) {
      console.log('Error al enviar el correo:', error);
      throw new Error('Error al enviar el correo');
    }
  }
}
