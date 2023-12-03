import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopBarComponent} from '../app-top-bar/app-top-bar.component';
import { AppRedarePortofoliuComponent } from '../app-redare-portofoliu/app-redare-portofoliu.component';
import { ButtonComponent } from '../button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ImagineService } from '../imagine.service';
@Component({
  standalone: true,
  selector: 'app-edit-page',
  imports: [CommonModule, AppTopBarComponent, AppRedarePortofoliuComponent, ButtonComponent,  ReactiveFormsModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {
  applyForm = new FormGroup({
  src: new FormControl(''),
  alt: new FormControl('')
});
submitApplication() {
  this.imagineService.submitApplication(
    this.applyForm.value.src ?? '',
    this.applyForm.value.alt ?? ''
  );
}
}
