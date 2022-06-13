import { Injectable } from '@angular/core';
import { ETaskStatus } from '../models/common';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getAllTasks() {
    const tasks = [];
    for (let i = 0; i < 10; i++) {
      const task = {
        id: i,
        title: `Task ${i + 1}`,
        status: Object.values(ETaskStatus)[(Math.random() * Object.values(ETaskStatus).length) | 0], // to get random value from enum
        date: new Date(),
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        updates: []
      }
      for (let j = 0; j < 3; j++) {
        task.updates.push({
          id: j,
          text: `Update ${j + 1}`,
          date: new Date()
        })
      }
      tasks.push(task);
    }
    return tasks;
  }

}
