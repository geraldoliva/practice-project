import { Component, Input } from '@angular/core';
import { Task } from '../models/Task.model';
import { DUMMY_TASKS } from '../dummy-tasks';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() selectedId!: string;
  tasks = DUMMY_TASKS;
}
