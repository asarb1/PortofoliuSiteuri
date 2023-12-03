import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopBarComponent} from '../app-top-bar/app-top-bar.component';
import { AppPortofoliuComponent} from '../app-portofoliu/app-portofoliu.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-admin-page',
  imports: [CommonModule, AppTopBarComponent, AppPortofoliuComponent, ButtonComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
