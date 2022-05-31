import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interace';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input('nuevo')nuevo:Personaje={
    nombre:"",
    poder:0

  }
  constructor(private dbzService:DbzService){

  }

  // @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();
//Referencia q se emitia eventos



  agregar(){
    if ( this.nuevo.nombre.trim().length===0 ){
      return
    }
    if (!this.nuevo.poder){
      return
    }
    this.dbzService.agregarNuevoPersonaje(this.nuevo);
  //  this.onNuevoPersonaje.emit(this.nuevo);
   this.nuevo={
     nombre:"",
     poder:0,
   }
  }


}
