import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { User } from './models/User.model';
import { DUMMY_USERS } from './dummy-users';
import { Task } from './models/Task.model';
import { dummyTasks } from './dummy-tasks';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  name!: string
  
  userId!: string;

  onSelectUser(id: string) {
    this.userId = id;
    let user = this.users.filter(user => user.id === this.userId)[0]
    this.name = user.name
  }
}
