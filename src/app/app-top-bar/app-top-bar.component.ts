import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-app-top-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './app-top-bar.component.html',
  styleUrl: './app-top-bar.component.css'
})
export class AppTopBarComponent {

}
