import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interace";

@Injectable()
export class DbzService{
  constructor(){
    console.log("Servicio Inicializado")

  }

private _personajes:Personaje[]=[
  {
    nombre:"Goku",
    poder:15000
  },
  {
    nombre:"Piccolo",
    poder:8500
  }
];


  get personajes():Personaje[]{
    return [...this._personajes]
  }




  agregarNuevoPersonaje(argumento:Personaje){
    this._personajes.push(argumento);
      }
}

