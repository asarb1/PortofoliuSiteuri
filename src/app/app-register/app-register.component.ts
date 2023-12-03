import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
@Component({
  standalone: true,
  selector: 'app-app-register',
  imports: [CommonModule],
  templateUrl: './app-register.component.html',
  styleUrl: './app-register.component.css'
})
export class AppRegisterComponent {
@Input() user!: User;
}
