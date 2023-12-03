import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopBarComponent } from '../app-top-bar/app-top-bar.component';
import { AppPortofoliuComponent } from '../app-portofoliu/app-portofoliu.component';
import { AppRegisterComponent } from '../app-register/app-register.component';
import { LinkComponent } from '../link/link.component';
@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CommonModule, AppTopBarComponent, AppPortofoliuComponent, AppRegisterComponent, LinkComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
