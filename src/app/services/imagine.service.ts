import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagine } from '../models/imagine.model';

const baseUrl2 = 'http://localhost:8080/api/user';
const baseUrl4 = 'http://localhost:8080/api/edit';
@Injectable({
  providedIn: 'root'
})
export class ImagineService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Imagine[]> {
    return this.http.get<Imagine[]>(baseUrl2);
  }

  getAll1(): Observable<Imagine[]> {
    return this.http.get<Imagine[]>(baseUrl4);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl4, data);
  }

  get(id: any): Observable<Imagine> {
    return this.http.get(`${baseUrl2}/${id}`);
  }

  get1(id: any): Observable<Imagine> {
    return this.http.get(`${baseUrl4}/${id}`);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl4}/${id}`);
  }
}
