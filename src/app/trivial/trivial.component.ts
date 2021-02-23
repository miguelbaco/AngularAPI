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

  constructor(private _peticiones: PreguntasService, public fb: FormBuilder) {
    this.trivif = new Trivial(10,"");
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'npreguntas': ['', [Validators.min(1), Validators.max(15)]]
    });
  }

  getApi() {
    this.trivif = new Trivial(this.myForm.get('npreguntas').value, "");
    this._peticiones.obtener(this.trivif).subscribe(
      data=>{//console.log(data);
        for (let resultados of data.results) {
          this.trivif.preguntas.push(resultados.question);
          this.trivif.respuestas.push(resultados.correct_answer);
        }
      }, error => {
        var errorMessage = error as any;
        console.log(errorMessage);
      });    
  }

  validartrivial() {
    let i:number = 1;
    for(let pregunta of this.trivif.preguntas) {
      let nameformg = "respuesta" + i;
      this.myForm2 = this.fb.group({
        nameformg: ['', [Validators.pattern('^' + this.trivif.respuestas[i-1] + '$')]]
      });
      i++;
    }
    return false;
  }

}
