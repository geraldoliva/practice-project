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
  @Output() selectedId = new EventEmitter<string>()

  onSelectUser() {
    this.selectedId.emit(this.user.id)
  }
}
