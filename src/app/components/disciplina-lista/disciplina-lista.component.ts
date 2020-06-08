import { Disciplina } from './../../models/disciplina';
import { DisciplinaService } from './../../services/disciplina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina-lista',
  templateUrl: './disciplina-lista.component.html',
  styleUrls: ['./disciplina-lista.component.css'],
})
export class DisciplinaListaComponent implements OnInit {
  public disciplinas: Disciplina[];
  constructor(private disciplinaService: DisciplinaService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.disciplinaService.getAll(0, 10).subscribe(
      (res) => {
        this.disciplinas = res['data'].content;
      },
      (err) => console.error(err)
    );
  }
}
