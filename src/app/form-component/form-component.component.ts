import { Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { Portofoliu } from '../models/portofoliu.model';
import { PortofoliuService } from '../services/portofoliu.service';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent implements OnInit{
  portofoliu: Portofoliu = {
    imagine: '',
    titlu: '',
    descriere: '',
    link: '',
      published: false
    };
    submitted = false;

    constructor(private portofoliuService: PortofoliuService) { }

    ngOnInit(): void {
    }

    savePortofoliu(): void {
      const data = {
        imagine: this.portofoliu.imagine,
        titlu: this.portofoliu.titlu,
        descriere: this.portofoliu.descriere,
        link: this.portofoliu.link,
      };

      this.portofoliuService.create(data)
        .subscribe({
          next: (res:any) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e:any) => console.error(e)
        });
    }

    newPortofoliu(): void {
      this.submitted = false;
      this.portofoliu = {
        imagine: '',
        titlu: '',
        descriere: '',
        link: '',
        published: false
      };
    }
}
