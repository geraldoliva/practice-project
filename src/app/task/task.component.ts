import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/Task.model';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() userId!: string;
  @Input() tasks!: Task[]

}
