import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (configService:ConfigService)=>({
        transport: {
          host: 'smtp.googlemail.com',
          port: 465,
          ignoreTLS: true,
          secure: true,
          auth: {
            user: configService.get('EMAIL_ID'),
            pass: configService.get('EMAIL_PASS'),
          },
        },
        defaults: {
          from: '"No Reply" <no-reply@gmail.com>',
        },
        preview: false,
      }),
      inject:[ConfigService]
    }),
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
