import { Injectable } from '@angular/core';
import { Image } from '../image';

@Injectable({
  providedIn: 'root'
})
export class ImagineService {
  image: Image []= {
    id:0,
    src:'data:image/jpeg;base64,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',
    alt:'caine'
  }
  getAllImages(): Image[] {
  return this.image;
}
getImagesById(id: number): Image | undefined {
  return this.image.find(image => image.id === id);
}

submitApplication(src: string, alt: string) {
  console.log(`S-a introdus imaginea: src: ${src}, alt: ${alt}`);
}

  constructor() { }
}
