import {Component, OnInit} from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import {Curso} from '../../interfaces/curso';
import {CursosService} from '../../services/cursos.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  cursos: Curso[] = [];

  constructor(private cursosService: CursosService, private dataService: DataLocalService) {
  }

  ngOnInit(): void {
    this.cursosService.getInscripciones(this.dataService.getEmailInBrowser()).subscribe(resp => {
      if (resp.status === 0) {
        this.cursos = resp.data;
      }
    });
  }

}
