import { BullModule } from '@nestjs/bull';
import { QueuesService } from './queues.service';
import { Module } from '@nestjs/common';
import { TasksProcessor } from 'src/tasks/tasks.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'tasks',
    }),
  ],
  providers: [QueuesService, TasksProcessor],
})
export class QueuesModule {}
