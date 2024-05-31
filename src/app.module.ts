import { BullModule } from '@nestjs/bull';
import { QueuesModule } from './queues/queues.module';
import { TasksModule } from './tasks/tasks.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    QueuesModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
