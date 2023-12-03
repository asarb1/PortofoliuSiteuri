import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopBarComponent} from '../app-top-bar/app-top-bar.component';
import { AppPortofoliuComponent} from '../app-portofoliu/app-portofoliu.component';
import { ButtonComponent } from '../button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PortofoliuService } from '../portofoliu.service';
@Component({
  standalone: true,
  selector: 'app-admin-page',
  imports: [CommonModule, AppTopBarComponent, AppPortofoliuComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  applyForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    link: new FormControl('')
  });
  submitApplication() {
  this.portofoliuService.submitApplication(
    this.applyForm.value.title ?? '',
    this.applyForm.value.description ?? '',
    this.applyForm.value.link ?? ''
  );
}
}
