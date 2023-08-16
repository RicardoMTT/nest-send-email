import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}



  sendMail(messageDto: MessageDto): void {
    this.mailerService
      .sendMail({
        to: messageDto.to,
        from: messageDto.from,
        subject: messageDto.subject,
        text: messageDto.text,
        html: `<b>Has recibido un mensaje de  ${messageDto.from}</b>`,
      })
      .catch((err) => {
        console.log('err', err);
      });

      this.mailerService
      .sendMail({
        to: messageDto.from,
        from: messageDto.to,
        subject: messageDto.subject,
        text: messageDto.text,
        html: `<b>Has enviado un mensaje a  ${messageDto.to}</b>`,
      })
      .catch((err) => {
        console.log('err', err);
      });
  }
}
