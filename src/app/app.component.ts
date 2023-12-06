import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import {AdminPageComponent } from './admin-page/admin-page.component';
import {AppPortofoliuComponent } from './app-portofoliu/app-portofoliu.component';
import {AppRedarePortofoliuComponent } from './app-redare-portofoliu/app-redare-portofoliu.component';
import {AppRegisterComponent } from './app-register/app-register.component';
import {AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import {EditPageComponent } from './edit-page/edit-page.component';
import {HomePageComponent } from './home-page/home-page.component';
import {LoginPageComponent } from './login-page/login-page.component';
import {UserPageComponent } from './user-page/user-page.component';
import {AppTopBarAdminComponent} from './app-top-bar-admin/app-top-bar-admin.component';
import {PortofoliuAdminComponent} from './portofoliu-admin/portofoliu-admin.component';
import {RedarePortofoliuAdminComponent} from './redare-portofoliu-admin/redare-portofoliu-admin.component';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule, HttpClientModule, RouterOutlet, AdminPageComponent, AppPortofoliuComponent, AppRedarePortofoliuComponent, AppRegisterComponent, AppTopBarComponent, EditPageComponent, HomePageComponent, LoginPageComponent, UserPageComponent, AppTopBarAdminComponent, PortofoliuAdminComponent, RedarePortofoliuAdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Portofoliu';
}
