import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

//Implementa el OnInit, es el primer ciclo de vida , implementa ngOnInit(), los cilcos de vida son metodos q dispara angular de manera automatica
export class ListadoComponent implements OnInit {
       heroes:string[]=['Spiderman','Ironman','Hulk','Thor','Capitan America']
       borrados:string="";
  constructor() {
   }
borrado:string="";
   borrarHeroe(){
     this.borrado=this.heroes.shift() || '';
   }
   //se utiliza para inicializar cosas, para traer informacion
  ngOnInit(): void {
  }

}
