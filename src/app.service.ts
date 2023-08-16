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
        html: `<b>Has recibido un mensaje de  ${messageDto.from}</b>`,
      })

      await this.mailerService
      .sendMail({
        to: messageDto.from,
        from: messageDto.to,
        subject: messageDto.subject,
        text: messageDto.text,
        html: `<b>Has enviado un mensaje a  ${messageDto.to}</b>`,
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
