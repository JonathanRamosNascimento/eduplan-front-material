import { PlanoDeEnsinoService } from './../../services/plano-de-ensino.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plano-detalhes',
  templateUrl: './plano-detalhes.component.html',
  styleUrls: ['./plano-detalhes.component.css']
})
export class PlanoDetalhesComponent implements OnInit {

  plano;

  constructor(
    private route: ActivatedRoute,
    private planoDeEnsinoService: PlanoDeEnsinoService
  ) {
    let id: string = this.route.snapshot.params['id'];
    if (id != undefined) {
      this.planoDeEnsinoService.findById(id).subscribe(
        (res) => {
          this.plano = res;
        }
      );
    }
  }

  ngOnInit() {
  }

  editar(id) {
    console.log(id);
  }
}
