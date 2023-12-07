import { Component, Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imagine } from '../models/imagine.model';
import { ImagineService } from '../services/imagine.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-app-redare-portofoliu',
  imports: [CommonModule],
  templateUrl: './app-redare-portofoliu.component.html',
  styleUrl: './app-redare-portofoliu.component.css'
})
export class AppRedarePortofoliuComponent implements OnInit{

  @Input() viewMode = false;


  @Input() currentImagine: Imagine = {
    title: '',
    description: '',
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


}
