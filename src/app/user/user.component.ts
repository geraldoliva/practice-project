import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/User.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean
  @Output() select = new EventEmitter<string>()

  onSelectUser() {
    this.select.emit(this.user.id)
    console.log("emitted from user component: " + this.user.id)
  }
}
