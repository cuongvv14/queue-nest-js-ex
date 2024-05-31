import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { QueuesService } from './queues.service';
import { EmailsProcessor } from '../emails/emails.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'email',
    }),
  ],
  providers: [QueuesService, EmailsProcessor],
  exports: [QueuesService],
})
export class QueuesModule {}
