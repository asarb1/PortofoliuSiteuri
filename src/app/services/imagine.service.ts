import { Injectable } from '@angular/core';
import { Imagine } from '../shared/models/imagine';
import { listaImagini } from '../imagini';

@Injectable({
  providedIn: 'root'
})
export class ImagineService {

  constructor() { }
  getAll():Imagine[] {
    return listaImagini;
  }
}
