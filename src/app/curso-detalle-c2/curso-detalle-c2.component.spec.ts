import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalleC2Component } from './curso-detalle-c2.component';

describe('CursoDetalleC2Component', () => {
  let component: CursoDetalleC2Component;
  let fixture: ComponentFixture<CursoDetalleC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalleC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalleC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
