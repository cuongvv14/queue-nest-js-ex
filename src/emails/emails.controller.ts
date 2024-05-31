import { Body, Controller, Post } from '@nestjs/common';
import { EmailsService } from './emails.service';

@Controller('emails')
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @Post('send')
  async sendBulkEmails(@Body('emails') emails: string[]) {
    await this.emailsService.sendBulkEmails(emails);
  }
}

// Gửi yêu cầu POST: Gửi một yêu cầu POST tới http://localhost:3000/emails/send với dữ liệu email như sau:
// json:
// {
//     "emails": ["email1@example.com", "email2@example.com", "email3@example.com"]
// }
