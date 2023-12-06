import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopBarAdminComponent} from '../app-top-bar-admin/app-top-bar-admin.component';
import { RedarePortofoliuAdminComponent } from '../redare-portofoliu-admin/redare-portofoliu-admin.component';
import {FormEditComponent} from '../form-edit/form-edit.component';

@Component({
  standalone: true,
  selector: 'app-edit-page',
  imports: [CommonModule, AppTopBarAdminComponent, RedarePortofoliuAdminComponent, FormEditComponent],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {

}
