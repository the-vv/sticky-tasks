import { Component, OnInit } from '@angular/core';
import { ETaskStatus } from 'src/app/models/common';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public todoTasks: any[] = []
  public inProgressTasks: any[] = []
  public completedTasks: any[] = []

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    const allTasks = this.tasksService.getAllTasks();
    allTasks.forEach(task => {
      if (task.status === ETaskStatus.todo) {
        this.todoTasks.push(task);
      }
      if (task.status === ETaskStatus.inProgress) {
        this.inProgressTasks.push(task);
      }
      if (task.status === ETaskStatus.completed) {
        this.completedTasks.push(task);
      }
    })
    console.log(this.todoTasks);
    console.log(this.inProgressTasks);
    console.log(this.completedTasks);
  }

}
