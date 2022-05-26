import { Component } from "@angular/core";
@Component({
  selector : 'app-contador',
  template:`
      <h1>{{title}}</h1>

      <h3>La base es <strong>{{base}}</strong></h3>
      <button (click)="acumular(base)">{{base}}</button>
      <span>{{numero}}</span>
      <button (click)="acumular(-base)">{{base}}</button>


  	`
})

export class ContadorComponent {
  public title : string ='Contador App';
  numero       : number = 10;
  base         : number = 5;
  // sumar(){
  //   //se pone el this para hcaer referencia a la propeidad de la clase
  //   this.numero+= 1;
  //   //+= es la forma corta de la acumulacion

  // }
  // restar(){
  //   this.numero-=-1;
  // }
  // }

  acumular( valor:number ):void{
    this.numero += valor;
  }

}
