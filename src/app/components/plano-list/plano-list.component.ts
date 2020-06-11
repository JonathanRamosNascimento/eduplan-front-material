import { PlanoDeEnsinoService } from './../../services/plano-de-ensino.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plano-list',
  templateUrl: './plano-list.component.html',
  styleUrls: ['./plano-list.component.css'],
})
export class PlanoListComponent implements OnInit {
  planos: any;
  dataSource;
  displayedColumns: string[] = ['disciplina', 'turno', 'ano', 'acoes'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private planoEnsinoService: PlanoDeEnsinoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.planoEnsinoService.getAll().subscribe((data) => {
      this.planos = data['data']['content'];
      this.dataSource = new MatTableDataSource<any>(this.planos);
      this.dataSource.paginator = this.paginator;
    });
  }

  editar(plano) {
    console.log(plano);
  }

  deletar(plano) {
    alert('Deseja realmente deletar o plano com ID: ' + plano);
  }

  visualizar(plano) {
    this.router.navigateByUrl('/detalhes-plano/' + plano);
  }
}
