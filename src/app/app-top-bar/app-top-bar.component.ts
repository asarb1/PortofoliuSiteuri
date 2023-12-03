import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../link/link.component';
import { ButtonComponent } from '../button/button.component';
@Component({
  standalone: true,
  selector: 'app-app-top-bar',
  imports: [CommonModule, LinkComponent, ButtonComponent],
  templateUrl: './app-top-bar.component.html',
  styleUrl: './app-top-bar.component.css'
})
export class AppTopBarComponent {

}
