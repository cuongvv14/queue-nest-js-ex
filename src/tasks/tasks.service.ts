import { Injectable } from '@nestjs/common';
import { QueuesService } from 'src/queues/queues.service';

@Injectable()
export class TasksService {
  constructor(private readonly queueService: QueuesService) {}

  async createTask(data: any) {
    await this.queueService.addTask(data);
  }
}
