import { Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { Portofoliu } from 'src/app/models/tutorial.model';
import { PortofoliuService } from 'src/app/services/tutorial.service';
@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [RouterModule],
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
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
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
