import { Injectable } from '@nestjs/common';
import { QueuesService } from '../queues/queues.service';

@Injectable()
export class EmailsService {
  constructor(private readonly queuesService: QueuesService) {}

  async sendBulkEmails(emails: string[]) {
    for (const email of emails) {
      await this.queuesService.addEmailToQueue({ email });
    }
  }
}
