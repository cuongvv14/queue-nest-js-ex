import { TasksService } from './tasks.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
