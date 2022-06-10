import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalleB1Component } from './curso-detalle-b1.component';

describe('CursoDetalleB1Component', () => {
  let component: CursoDetalleB1Component;
  let fixture: ComponentFixture<CursoDetalleB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalleB1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalleB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
