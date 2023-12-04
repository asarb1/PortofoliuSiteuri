import { Component , Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portofoliu } from '../shared/models/portofoliu';
import { PortofoliuService} from '../services/portofoliu.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portofoliu-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portofoliu-admin.component.html',
  styleUrl: './portofoliu-admin.component.css'
})
export class PortofoliuAdminComponent {
  portofolii:Portofoliu[] = [];
  constructor(private portofoliuService:PortofoliuService) {
    this.portofolii = portofoliuService.getAll();
  }
}
