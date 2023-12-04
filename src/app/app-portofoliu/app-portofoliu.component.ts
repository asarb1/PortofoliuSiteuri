import { Component , Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portofoliu } from '../shared/models/portofoliu';
import { PortofoliuService} from '../services/portofoliu.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-app-portofoliu',
  imports: [CommonModule, RouterModule],
  templateUrl: './app-portofoliu.component.html',
  styleUrl: './app-portofoliu.component.css'
})
export class AppPortofoliuComponent {
portofolii:Portofoliu[] = [];
constructor(private portofoliuService:PortofoliuService) {
  this.portofolii = portofoliuService.getAll();
}
}
