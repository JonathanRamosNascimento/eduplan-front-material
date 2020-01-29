import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaNovoComponent } from './disciplina-novo.component';

describe('DisciplinaNovoComponent', () => {
  let component: DisciplinaNovoComponent;
  let fixture: ComponentFixture<DisciplinaNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
