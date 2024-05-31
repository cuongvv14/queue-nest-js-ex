import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('tasks')
export class TasksProcessor {
  @Process('processTask')
  async handleTask(job: Job) {
    console.log('Processing task', job.data);
    //Logic xử lý tác vụ
  }
}
