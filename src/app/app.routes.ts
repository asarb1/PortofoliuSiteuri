import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

export const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full', title: 'Home page' },
  { path: 'home', component: HomePageComponent, pathMatch: 'full', title: 'Portofolii' },
  { path: 'user/:id', component: UserPageComponent, pathMatch: 'full', title: 'Portofoliu'},
  { path: 'login', component: LoginPageComponent, pathMatch: 'full', title: 'Login page' },
  { path: 'admin', component: AdminPageComponent, pathMatch: 'full', title: 'Portofolii admin' },
  { path: 'edit/:id', component: EditPageComponent, pathMatch: 'full', title: 'Portofoliu admin' }
];
