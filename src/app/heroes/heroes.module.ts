import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
  declarations:[
    //aca van los componenetes q tiene este componenete
    HeroeComponent,
    ListadoComponent
  ],
  exports:[
    ListadoComponent
    //aca va lo q queremos hacer publicos
  ],
  imports:[
    //aqui adentro van modulos ,todso los modulos unicamente,el COmmunModule tiene el ngIf y el ngFor
    CommonModule
  ]

})
export class HeroesModule{

}

