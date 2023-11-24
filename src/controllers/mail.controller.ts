import { Body, Controller, Post } from '@nestjs/common';
import { MailDto } from 'src/schemas/dtos/mail.dto';
import { MailService } from 'src/services/mail.service';

@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post('letstalk')
  async sendTalkRequest(@Body() mailDto: MailDto) {
    return this.mailService.sendTalkRequest(mailDto);
  }
}
