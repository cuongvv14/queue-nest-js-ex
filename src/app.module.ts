import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { EmailsModule } from './emails/emails.module';
import { QueuesModule } from './queues/queues.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    EmailsModule,
    QueuesModule,
  ],
})
export class AppModule {}
