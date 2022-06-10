import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalleA1Component } from './curso-detalle-a1.component';

describe('CursoDetalleA1Component', () => {
  let component: CursoDetalleA1Component;
  let fixture: ComponentFixture<CursoDetalleA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalleA1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalleA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
