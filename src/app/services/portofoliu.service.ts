import { Injectable } from '@angular/core';
import { listaPortofolii } from '../portofolii';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portofoliu } from '../models/portofoliu.model';

const baseUrl = 'http://localhost:8080/api/portofoliu';
@Injectable({
  providedIn: 'root'
})
export class PortofoliuService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  get(id: any): Observable<Portofoliu> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
