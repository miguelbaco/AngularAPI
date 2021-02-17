import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FotosService } from '../services/fotos.service';
import { Fotos } from './fotos';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css'],
  providers: [FotosService]
})
export class FotosComponent implements OnInit {

  public datos: Array<any> = [];
  public busquedafotos: Fotos;
  public myForm: FormGroup;
  public busqueda: string = "";

  constructor(private _peticiones: FotosService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      buscar: new FormControl('', [Validators.required])
    });
  }

  getApi() {
    this.busqueda = this.myForm.get('buscar').value;
    this._peticiones.obtener(this.busqueda).subscribe(
      data=>{console.log(data);
        this.datos =data;
      }, error => {
        var errorMessage = error as any;
        console.log(errorMessage);
      });
  }
}
