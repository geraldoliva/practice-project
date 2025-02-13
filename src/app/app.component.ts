import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { User } from './models/User.model';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';
import { Task } from './models/Task.model';
import { dummyTasks } from './dummy-tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  tasks: Task[] = dummyTasks
  userId!: string;

  onSelectUser(id: string) {
    this.userId = id;
    
    this.tasks = dummyTasks.filter((task) => task.userId === this.userId);
    console.log("from app: " + this.userId)
  }
}
