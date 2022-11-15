import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

console.log('process.env.EMAIL_ID', process.env.EMAIL_ID);

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.googlemail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'ricardotovar.grupobruild@gmail.com',
          pass: 'kilrwrpaubbbbnqp',
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@gmail.com>',
      },
      preview: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
