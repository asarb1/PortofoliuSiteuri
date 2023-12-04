import { Component, Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imagine } from '../shared/models/imagine';
import { ImagineService} from '../services/imagine.service';

@Component({
  standalone: true,
  selector: 'app-app-redare-portofoliu',
  imports: [CommonModule],
  templateUrl: './app-redare-portofoliu.component.html',
  styleUrl: './app-redare-portofoliu.component.css'
})
export class AppRedarePortofoliuComponent {
  imagini:Imagine[] = [];
  constructor(private imagineService:ImagineService) {
    this.imagini = imagineService.getAll();
  }

}
