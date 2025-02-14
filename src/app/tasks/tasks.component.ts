import { Component, inject, Input } from '@angular/core';
import { NewTaskData, Task } from '../models/Task.model';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name!: string;
  tasksService = inject(TasksService);
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
