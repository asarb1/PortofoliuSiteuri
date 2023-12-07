import { Component , Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Portofoliu } from '../models/portofoliu.model';
import { PortofoliuService } from '../services/portofoliu.service';
import { OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-portofoliu-admin',
  imports: [CommonModule, RouterModule],
  templateUrl: './portofoliu-admin.component.html',
  styleUrl: './portofoliu-admin.component.css'
})
export class PortofoliuAdminComponent implements OnInit{
  portofolii?: Portofoliu[];
    currentPortofoliu: Portofoliu = {};
    currentIndex = -1;
    titlu = '';

    constructor(private portofoliuService: PortofoliuService) { }

    ngOnInit(): void {
    this.retrievePortofolii();
  }

  retrievePortofolii(): void {
   this.portofoliuService.getAll1()
     .subscribe({
       next: (data) => {
         this.portofolii = data;
         console.log(data);
       },
       error: (e) => console.error(e)
     });
 }

}
