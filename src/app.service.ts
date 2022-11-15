import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}

  getHello(): string {
    return 'Hello World!';
  }

  sendMail(messageDto: MessageDto): void {
    this.mailerService
      .sendMail({
        to: messageDto.to,
        from: messageDto.from,
        subject: messageDto.subject,
        text: messageDto.text,
        html: `<b>welcome ${messageDto.text}</b>`,
      })
      .catch((err) => {
        console.log('err', err);
      });
  }
}
