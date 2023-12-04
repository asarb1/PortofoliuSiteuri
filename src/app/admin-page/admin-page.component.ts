import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopBarAdminComponent} from '../app-top-bar-admin/app-top-bar-admin.component';
import { PortofoliuAdminComponent} from '../portofoliu-admin/portofoliu-admin.component';

@Component({
  standalone: true,
  selector: 'app-admin-page',
  imports: [CommonModule, AppTopBarAdminComponent, PortofoliuAdminComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
