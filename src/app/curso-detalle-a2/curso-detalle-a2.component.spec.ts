import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalleA2Component } from './curso-detalle-a2.component';

describe('CursoDetalleA2Component', () => {
  let component: CursoDetalleA2Component;
  let fixture: ComponentFixture<CursoDetalleA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalleA2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalleA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
