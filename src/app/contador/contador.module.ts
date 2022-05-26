import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";



@NgModule({
  declarations:[
    ContadorComponent
    //aca van los componenetes q tiene este componenete

  ],
  exports:[
     ContadorComponent
    //aca va lo q queremos hacer publicos
  ],
  imports:[
    //aqui adentro van modulos ,todso los modulos unicamente,el COmmunModule tiene el ngIf y el ngFor

  ]

})
export class ContadorModule{

}

