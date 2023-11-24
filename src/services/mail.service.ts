import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailDto } from 'src/schemas/dtos/mail.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendTalkRequest(mailDto: MailDto) {
    console.log('Sending the email...');
    await this.mailerService.sendMail({
      to: 'rennyjr.id@gmail.com',
      subject: '[Opportunity] Hey René, wanna talk?',
      template: '../templates/talkrequest.hbs',
      context: {
        name: mailDto.name,
        mail: mailDto.email,
        message: mailDto.message,
      },
    });
    console.log('Mail sended successfully');
  }
}
