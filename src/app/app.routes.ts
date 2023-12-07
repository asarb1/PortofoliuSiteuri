import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

export const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'user/:id', component: UserPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: 'edit/:id', component: EditPageComponent}
];
