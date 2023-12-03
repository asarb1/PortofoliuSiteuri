import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AdminPageComponent } from './admin-page/admin-page.component';
import {AppPictureComponent } from './app-picture/app-picture.component';
import {AppPortofoliuComponent } from './app-portofoliu/app-portofoliu.component';
import {AppRedarePortofoliuComponent } from './app-redare-portofoliu/app-redare-portofoliu.component';
import {AppRegisterComponent } from './app-register/app-register.component';
import {AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import {EditPageComponent } from './edit-page/edit-page.component';
import {HomePageComponent } from './home-page/home-page.component';
import {LoginPageComponent } from './login-page/login-page.component';
import {UserPageComponent } from './user-page/user-page.component';
import {ButtonComponent } from './button/button.component';
import {LinkComponent } from './link/link.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, AdminPageComponent, AppPictureComponent, AppPortofoliuComponent, AppRedarePortofoliuComponent, AppRegisterComponent, AppTopBarComponent, EditPageComponent, HomePageComponent, LoginPageComponent, UserPageComponent, ButtonComponent, LinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Portofoliu';
