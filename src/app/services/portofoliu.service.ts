import { Injectable } from '@angular/core';
import { Portofoliu } from '../shared/models/portofoliu';
import { listaPortofolii } from '../portofolii';
@Injectable({
  providedIn: 'root'
})
export class PortofoliuService {

  constructor() { }

  getAll():Portofoliu[] {
    return listaPortofolii;
  }
  
}