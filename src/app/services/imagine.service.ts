import { Injectable } from '@angular/core';
import { listaImagini } from '../imagini';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagine } from '../models/imagine.model';

const baseUrl = 'http://localhost:8080/api/imagine';
@Injectable({
  providedIn: 'root'
})
export class ImagineService {

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  get(id: any): Observable<Imagine> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
