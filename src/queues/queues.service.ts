import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class QueuesService {
  constructor(@InjectQueue('email') private readonly emailQueue: Queue) {}

  async addEmailToQueue(emailData: any) {
    await this.emailQueue.add('sendEmail', emailData);
  }
}
