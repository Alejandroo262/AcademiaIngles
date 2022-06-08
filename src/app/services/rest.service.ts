import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  //public datosVisitante = 'http://localhost:8000/api/getVisitantes';

  constructor(private http: HttpClient) { }

  public post(url: string, body: any) {
    return this.http.post(url, body);
  }

  public get(url: string, body: any) {
    return this.http.get(url, body);
  }

  // public getVisitante(): Observable<any> {
  //   return this.http.get(this.datosVisitante);
  // }

}
