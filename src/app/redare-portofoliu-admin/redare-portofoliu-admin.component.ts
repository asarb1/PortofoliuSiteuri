import { Component, Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imagine } from '../shared/models/imagine';
import { ImagineService} from '../services/imagine.service';

@Component({
  selector: 'app-redare-portofoliu-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redare-portofoliu-admin.component.html',
  styleUrl: './redare-portofoliu-admin.component.css'
})
export class RedarePortofoliuAdminComponent {
  imagini:Imagine[] = [];
  constructor(private imagineService:ImagineService) {
    this.imagini = imagineService.getAll();
  }
}
