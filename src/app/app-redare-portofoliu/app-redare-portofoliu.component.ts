import { Component, Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imagine } from '../models/imagine.model';
import { ImagineService } from '../services/imagine.service';
import { OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-app-redare-portofoliu',
  imports: [CommonModule],
  templateUrl: './app-redare-portofoliu.component.html',
  styleUrl: './app-redare-portofoliu.component.css'
})
export class AppRedarePortofoliuComponent implements OnInit{
  imagini?: Imagine[];
  currentImagine: Imagine = {};
  currentIndex = -1;
  src = '';

  constructor(private imagineService: ImagineService) { }

  ngOnInit(): void {
    this.retrieveImagine();
  }

  retrieveImagine(): void {
    this.imagineService.getAll()
      .subscribe({
        next: (data) => {
          this.imagini = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}
