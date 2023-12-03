import { Component , Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portofoliu } from '../portofoliu';
import { Image } from '../image';
import { AppPictureComponent } from '../app-picture/app-picture.component';
import { ButtonComponent } from '../button/button.component';
import { ImagineService } from '../imagine.service';
@Component({
  standalone: true,
  selector: 'app-app-portofoliu',
  imports: [CommonModule, AppPictureComponent, ButtonComponent],
  templateUrl: './app-portofoliu.component.html',
  styleUrl: './app-portofoliu.component.css'
})
export class AppPortofoliuComponent {
@Input() image!: Image;
portofoliuList: Portofoliu[] = [
    {
      id:0,
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      link:""
    },
    {
      id:1,
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      link:""
    },
    {
      id:2,
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      link:""
    },
    {
      id:3,
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      link:""
    }
  ];
}
