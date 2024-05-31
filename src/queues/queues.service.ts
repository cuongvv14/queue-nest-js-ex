import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class QueuesService {
  constructor(@InjectQueue('tasks') private readonly taskQueue: Queue) {}

  async addTask(data: any) {
    await this.taskQueue.add('processTask', data);
  }
}
