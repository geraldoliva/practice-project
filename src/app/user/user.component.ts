import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/User.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>()

  onSelectUser() {
    this.select.emit(this.user.id)
    console.log("emitted from user component: " + this.user.id)
  }
}
