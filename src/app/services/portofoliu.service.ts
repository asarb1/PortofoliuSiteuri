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

  getPortofoliuById(id: number): Portofoliu | undefined {
    return this.getAll().find(portofoliu => portofoliu.id === id);
  }
}
