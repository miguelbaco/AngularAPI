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
    if(trivif.numcategory == 0) {
      this.url = "https://opentdb.com/api.php?amount=" + trivif.numpreguntas;
    } else {
      this.url = "https://opentdb.com/api.php?amount=" + trivif.numpreguntas + "&category=" + trivif.numcategory;
    }
    return this.http.get(this.url);
  }


}
