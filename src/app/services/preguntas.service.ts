import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trivial } from '../trivial/trivial';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  public url:string = "";


  constructor(private http: HttpClient) { }

  obtener(trivif: Trivial): Observable<any> {
    if(trivif.npreguntas != null) {
      this.url = "https://opentdb.com/api.php?amount=10";
    } else {
      this.url = "https://opentdb.com/api.php?amount=" + trivif.npreguntas;
    }
    return this.http.get(this.url);
  }


}
