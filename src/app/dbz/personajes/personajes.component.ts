import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent{

  //estos perosnajes van a venir desde e lcomponente padre cuando le pongo el decorador Input
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService:DbzService){

  }


}

