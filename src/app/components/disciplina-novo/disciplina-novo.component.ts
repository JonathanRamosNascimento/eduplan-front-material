import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { DisciplinaService } from './../../services/disciplina.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina-novo',
  templateUrl: './disciplina-novo.component.html',
  styleUrls: ['./disciplina-novo.component.css'],
})
export class DisciplinaNovoComponent implements OnInit {
  disciplinaForm: FormGroup = this.fb.group({
    id: [null],
    nome: ['', [Validators.required]],
    chteorica: ['', [Validators.required]],
    chpratica: ['', [Validators.required]],
    chtotal: ['', [Validators.required]],
    ementa: ['', [Validators.required]],
    objetivoGeral: ['', [Validators.required]],
    objetivoEspecifico: ['', [Validators.required]],
    habilidadeCompetencias: ['', [Validators.required]],
    conteudoProgramatico: ['', [Validators.required]],
    procedimentosDidaticos: ['', [Validators.required]],
    atividadeIntegrativa: ['', [Validators.required]],
    primeiraVA: ['', [Validators.required]],
    segundaVA: ['', [Validators.required]],
    terceiraVA: ['', [Validators.required]],
    bibliografiaBasica: ['', [Validators.required]],
    bibliografiaComplementar: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private disciplianService: DisciplinaService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const id: string = this.route.snapshot.params['id'];
    if (id != undefined) {
      this.getDisciplina(id);
    }
  }

  salvar() {
    this.disciplianService.createOrUpdate(this.disciplinaForm.value).subscribe(
      (res) => {
        this.disciplinaForm.reset();
        this.router.navigate(['/lista-disciplinas']);
        this.openSnackBar('Salvo com sucesso', 'OK');
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getDisciplina(id: string) {
    this.disciplianService.getOne(id).subscribe((res) => {
      this.disciplinaForm.setValue(res['data']);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
