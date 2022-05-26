import { stringify } from "querystring";

class PersonaNormal {
  constructor (public nombre: string,
               public direccion:string){

  }
}
//Asi se definen las clases, directmaente con los atributos dentro del constructor y con la palabra public para q no
//sea necesario hacer public nombre:string y luego en el constructor constructor(public nombre:string){
  //this.nombre=nombre;}

  class Heroe2 extends PersonaNormal {
    constructor (

      public alterEgo:string,
      public edad:number,
      public nombreReal:string
    ){
      super(nombreReal,"new York");
    }
  }
