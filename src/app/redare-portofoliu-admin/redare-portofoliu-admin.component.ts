import { Component, Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imagine } from '../models/imagine.model';
import { ImagineService } from '../services/imagine.service';
import {OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-redare-portofoliu-admin',
  imports: [CommonModule],
  templateUrl: './redare-portofoliu-admin.component.html',
  styleUrl: './redare-portofoliu-admin.component.css'
})
export class RedarePortofoliuAdminComponent implements OnInit{
  imagini?: Imagine[];
  currentImagine: Imagine = {};
  currentIndex = -1;


  constructor(private imagineService: ImagineService) { }

  ngOnInit(): void {
      this.retrieveImagine();
  }

  retrieveImagine(): void {
    this.imagineService.getAll1()
      .subscribe({
        next: (data) => {
          this.imagini = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  deleteImagine(): void {
    this.imagineService.delete(this.currentImagine.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveImagine();
    this.currentImagine = {};
    this.currentIndex = -1;
  }

}
