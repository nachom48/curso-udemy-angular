class Heroe  {
  private alterEgo: string;
  public edad: number;
  static nombreReal:number;


  // constructor(alterEgo:string,edad:number){
  //   this.edad=edad;
  //   this.alterEgo=alterEgo;

    //para no hacer el this.propiedad y todo se hace mas facil

    constructor(
      public alterEgo:string,
      public edad:number,
      public nombreReal:number,
      ){}
      //al ponerle el nivel de acceso le digo q se cree una propiedad en la clase q se llame alterEgo
    //el constructor es una funcion q sel lama cuando creo una instancia de mi clase , esos parentenesis de new Heroe() hacen referencia al constructor
  }
}

//static puedo acceder sin crea una instancia de la clase
//public pueden acceder cualquiera
//private  solo dentro de la clase


const ironman=new Heroe ('Ironman',35,25);
console.log(ironman);


//Diferencia entre clase e interface

//Las interfaces no existen en javascript, y las clases si,
//las clases me sirven para crear instancias, para crear objetos de esa clase
//en una interfaz pno puedo poner metodso como getter y setts, las interfaces son clases tontas,
//cunado no dice si son publicas o privadas por defecto es publico,
