import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CursosComponent} from './cursos/cursos.component';
import {IonicModule} from '@ionic/angular';
import {CursoComponent} from './curso/curso.component';
import {HeaderComponent} from './header/header.component';
import { CursoAprendizajeComponent } from './curso-aprendizaje/curso-aprendizaje.component';
import { CursosAprendizajeComponent } from './cursos-aprendizaje/cursos-aprendizaje.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoComponent,
    HeaderComponent,
    CursoAprendizajeComponent,
    CursosAprendizajeComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CursosComponent,
    CursoComponent,
    HeaderComponent,
    CursoAprendizajeComponent,
    CursosAprendizajeComponent
  ]
})
export class ComponentsModule { }
