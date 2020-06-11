import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Disciplina } from './../../models/disciplina';
import { DisciplinaService } from './../../services/disciplina.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-disciplina-lista',
  templateUrl: './disciplina-lista.component.html',
  styleUrls: ['./disciplina-lista.component.css'],
})
export class DisciplinaListaComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'chteorica', 'chpratica', 'acoes'];
  dataSource: MatTableDataSource<Disciplina>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private disciplinaService: DisciplinaService,
    private router: Router
  ) {
    this.getAll();
  }

  ngOnInit() {}

  getAll() {
    this.disciplinaService.getAll(0, 200).subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res['data'].content);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => console.error(err)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editar(id: string) {
    this.router.navigate([`/nova-disciplina/${id}`]);
  }

  delete(id: string) {
    console.log(id);
  }
}
