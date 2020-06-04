import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina-novo',
  templateUrl: './disciplina-novo.component.html',
  styleUrls: ['./disciplina-novo.component.css'],
})
export class DisciplinaNovoComponent implements OnInit {
  disciplinaForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.email]],
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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
