import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopBarComponent} from '../app-top-bar/app-top-bar.component';
import { AppRedarePortofoliuComponent } from '../app-redare-portofoliu/app-redare-portofoliu.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-edit-page',
  imports: [CommonModule, AppTopBarComponent, AppRedarePortofoliuComponent, ButtonComponent],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {

}
