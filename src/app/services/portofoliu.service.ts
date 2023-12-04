import { Injectable } from '@angular/core';
import { Portofoliu } from '../shared/models/portofoliu';
import { listaPortofolii } from '../portofolii';
import {PORTOFOLII_URL} from '../shared/constants/urls';
import {PORTOFOLIU_BY_ID_URL} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PortofoliuService {

  constructor(private http:HttpClientModule) { }

  getAll():Observable<Portofoliu[]> {
    return this.http.get<Portofoliu[]>(PORTOFOLII_URL);
  }

  getPortofoliuById(id: number): Observable<Portofoliu[]> | undefined {
    return this.http.get<Portofoliu[]>(PORTOFOLIU_BY_ID_URL + id);
  }
}
