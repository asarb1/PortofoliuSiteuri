import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portofoliu } from '../models/portofoliu.model';

const baseUrl = 'http://localhost:8080/api/home/';
const baseUrl1 = 'http://localhost:8080/api/admin/';

@Injectable({
  providedIn: 'root'
})
export class PortofoliuService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Portofoliu[]> {
    return this.http.get<Portofoliu[]>(baseUrl);
  }

  getAll1(): Observable<Portofoliu[]> {
    return this.http.get<Portofoliu[]>(baseUrl1);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl1, data);
  }

  get(id: any): Observable<Portofoliu> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  get1(id: any): Observable<Portofoliu> {
    return this.http.get(`${baseUrl1}/${id}`);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl1}/${id}`);
  }

}
