import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
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
        template: {
          dir: join(__dirname, '/mail/templates'),
          adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
          options: {
            strict: true,
          },
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
