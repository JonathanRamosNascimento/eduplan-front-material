import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDetalhesComponent } from './plano-detalhes.component';

describe('PlanoDetalhesComponent', () => {
  let component: PlanoDetalhesComponent;
  let fixture: ComponentFixture<PlanoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
