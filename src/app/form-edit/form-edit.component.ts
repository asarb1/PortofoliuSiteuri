import { Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { Imagine } from '../models/imagine.model';
import { ImagineService } from '../services/imagine.service';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgIf} from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-edit',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  providers:[ImagineService],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.css'
})
export class FormEditComponent implements OnInit{
  imagine: Imagine = {
    src: '',
    alt: '',
      published: false
    };
    submitted = false;

    constructor(private imagineService: ImagineService) { }

    ngOnInit(): void {
    }

    saveImagine(): void {
      const data = {
        src: this.imagine.src,
        alt: this.imagine.alt,
      };

      this.imagineService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
    }

    newImagine(): void {
      this.submitted = false;
      this.imagine = {
        src: '',
        alt: '',
        published: false
      };
    }
}
