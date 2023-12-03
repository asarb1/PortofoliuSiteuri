import { Injectable } from '@angular/core';
import { Portofoliu } from '../portofoliu';

@Injectable({
  providedIn: 'root'
})
export class PortofoliuService {
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

    getAllPortofolios(): Portofoliu[] {
  return this.portofoliuList;
}

getPortofoliosById(id: number): Portofoliu | undefined {
  return this.portofoliuList.find(portofoliuList => portofoliuList.id === id);
}

submitApplication(title: string, description: string, link: string) {
  console.log(`Homes application received: title: ${title}, description: ${description}, link: ${link}.`);
}

  constructor() { }
}
