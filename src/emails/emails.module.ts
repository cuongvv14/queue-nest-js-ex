import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { QueuesModule } from 'src/queues/queues.module';

@Module({
  imports: [QueuesModule],
  providers: [EmailsService],
  exports: [EmailsService],
})
export class EmailsModule {}
