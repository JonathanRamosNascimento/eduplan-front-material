import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaDetalhesComponent } from './disciplina-detalhes.component';

describe('DisciplinaDetalhesComponent', () => {
  let component: DisciplinaDetalhesComponent;
  let fixture: ComponentFixture<DisciplinaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
