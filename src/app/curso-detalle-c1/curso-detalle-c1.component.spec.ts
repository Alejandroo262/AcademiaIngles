import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalleC1Component } from './curso-detalle-c1.component';

describe('CursoDetalleC1Component', () => {
  let component: CursoDetalleC1Component;
  let fixture: ComponentFixture<CursoDetalleC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalleC1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalleC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
