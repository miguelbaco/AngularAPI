import { Component, OnInit } from '@angular/core';
import { Trivial } from './trivial';
import { PreguntasService } from '../services/preguntas.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.css'],
  providers: [PreguntasService]
})
export class TrivialComponent implements OnInit {

  public trivif: Trivial;
  public myForm: FormGroup;
  public myForm2: FormGroup;
  public datos: Array<any> = [];
  public preguntactual: string = "";
  public respuestacierta: string = "";
  public respuestasrandom: Array<string> = [];
  public indice: number = 0;
  public notafinal: number = 0;
  public muestrapregunta: boolean = true;
  public finalisimo: boolean = false;

  constructor(private _peticiones: PreguntasService, public fb: FormBuilder) {
    this.trivif = new Trivial(10,"");
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'npreguntas': ['', [Validators.min(1), Validators.max(15)]],
      'category': ['', [Validators.required]]
    });
  }

  getApi() {
    this.trivif = new Trivial(this.myForm.get('npreguntas').value, this.myForm.get('category').value);
    this._peticiones.obtener(this.trivif).subscribe(
      data=>{//console.log(data);
        for (let resultados of data.results) {
          this.trivif.preguntas.push(resultados.question);
          this.trivif.respuestas.push(resultados.correct_answer);
          this.trivif.respuestasmal[this.trivif.respuestasmal.length] = [resultados.incorrect_answers];
        }
        this.getPregunta();
      }, error => {
        var errorMessage = error as any;
        console.log(errorMessage);
      });    
  }

  getPregunta() {
    this.respuestasrandom = [];
    this.muestrapregunta = true;

    //console.log(this.trivif.respuestasmal[this.indice]);
    if(this.trivif.respuestasmal[this.indice][0].length == 1) {
      this.respuestasrandom.push(this.remplazarcomillas(this.trivif.respuestas[this.indice]), this.remplazarcomillas(this.trivif.respuestasmal[this.indice][0][0]));
    } else {
      this.respuestasrandom.push(this.remplazarcomillas(this.trivif.respuestas[this.indice]), this.remplazarcomillas(this.trivif.respuestasmal[this.indice][0][0]), this.remplazarcomillas(this.trivif.respuestasmal[this.indice][0][1]), this.remplazarcomillas(this.trivif.respuestasmal[this.indice][0][2]));
    }

    this.preguntactual = this.remplazarcomillas(this.trivif.preguntas[this.indice]);
    this.respuestacierta = this.remplazarcomillas(this.trivif.respuestas[this.indice]);

    this.respuestasrandom.sort(() => Math.random() - 0.5);

    this.myForm2 = this.fb.group({
      'respuestadada': ['', [Validators.pattern('^' + this.respuestacierta + '$')]]
    });

    this.indice++;
    return true;
  }

  getAnswer() {
    this.muestrapregunta = false;

    if(this.indice == (this.trivif.preguntas.length)) {
      this.finalisimo = true;
    }
  }

  subirnota() {
    this.notafinal++;
    return true;
  }

  remplazarcomillas(text: string): string {
    return text.replace(/&amp;/g, "&")
              .replace(/&gt;/g, ">")
              .replace(/&lt;/g, "<")
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'")
              .replace(/&ntilde;/g, "ñ")
              .replace(/&Ntilde;/g, "Ñ")
              .replace(/&aacute;/g, "á")
              .replace(/&eacute;/g, "é")
              .replace(/&iacute;/g, "í")
              .replace(/&oacute;/g, "ó")
              .replace(/&uacute;/g, "ú")
              .replace(/&Aacute;/g, "Á")
              .replace(/&Eacute;/g, "É")
              .replace(/&Iacute;/g, "Í")
              .replace(/&Oacute;/g, "Ó")
              .replace(/&Uacute;/g, "Ú")
              .replace(/&euro;/g, "€")
              .replace(/&deg;/g, "°");
  }

  reinicio() {
    this.trivif = new Trivial(10, "");
    this.datos = [];
    this.preguntactual = "";
    this.respuestacierta = "";
    this.respuestasrandom = [];
    this.indice = 0;
    this.notafinal= 0;
    this.muestrapregunta = true;
    this.finalisimo = false;
  }

}
