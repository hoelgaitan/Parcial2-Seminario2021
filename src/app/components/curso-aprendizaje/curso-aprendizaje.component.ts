import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'app-curso-aprendizaje',
  templateUrl: './curso-aprendizaje.component.html',
  styleUrls: ['./curso-aprendizaje.component.scss'],
})
export class CursoAprendizajeComponent implements OnInit {
  @Input() curso: Curso;
  @Input() nro: number;
  constructor() { }

  ngOnInit() {}

}
