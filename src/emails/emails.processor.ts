import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('email')
export class EmailsProcessor {
  @Process('sendEmail')
  async handleSendEmail(job: Job) {
    console.log('Sending email to', job.data.email);
    // Logic gửi email
  }
}
