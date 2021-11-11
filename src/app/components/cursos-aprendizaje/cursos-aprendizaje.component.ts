import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'app-cursos-aprendizaje',
  templateUrl: './cursos-aprendizaje.component.html',
  styleUrls: ['./cursos-aprendizaje.component.scss'],
})
export class CursosAprendizajeComponent implements OnInit {
  @Input() cursos: Curso[] = [];
  constructor() { }

  ngOnInit() {
    console.log(this.cursos);
  }
  ngAfterViewInit(): void {
    console.log(this.cursos);
  }

}
