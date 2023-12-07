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
  @Input() viewMode = false;

  @Input() currentImagine: Imagine = {
    src: '',
    alt: '',
    published: false
  };

  constructor(private imagineService: ImagineService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.retrieveImagine(this.route.snapshot.params["id"]);
    }
  }

  retrieveImagine(id: string): void {
    this.imagineService.get(id)
      .subscribe({
        next: (data) => {
          this.currentImagine = data;
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
          this.router.navigate(['/admin']);
        },
        error: (e) => console.error(e)
      });
  }


}
