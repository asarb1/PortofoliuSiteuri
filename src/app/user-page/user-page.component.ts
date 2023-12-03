import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopBarComponent } from '../app-top-bar/app-top-bar.component';
import { AppRedarePortofoliuComponent } from '../app-redare-portofoliu/app-redare-portofoliu.component';

@Component({
  standalone: true,
  selector: 'app-user-page',
  imports: [CommonModule, AppTopBarComponent, AppRedarePortofoliuComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
