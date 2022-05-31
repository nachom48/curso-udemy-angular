import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations:[
    //aca van los componenetes q tiene este componenete
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent,

  ],
  exports:[
    MainPageComponent
    //aca va lo q queremos hacer publicos
  ],
  imports:[
    //aqui adentro van modulos ,todso los modulos unicamente,el COmmunModule tiene el ngIf y el ngFor
    CommonModule,
    FormsModule
  ],
  providers:[
    DbzService
  ]

})
export class DbzModule { }
