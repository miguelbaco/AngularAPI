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

  obtener(busqueda:string): Observable<any> {
    this.url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + busqueda;
    return this.http.get(this.url);
  }
}
