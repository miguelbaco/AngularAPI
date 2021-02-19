import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  public url:string = "";

  constructor(private http: HttpClient) {
    //this.url = "https://jsonplaceholder.typicode.com/posts";
  }

  obtener(): Observable<any> {//busqueda:string): Observable<any> {
    this.url = "https://dog.ceo/api/breeds/image/random";//+ busqueda;
    return this.http.get(this.url);
  }
}
