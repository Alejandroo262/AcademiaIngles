import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalleB2semiComponent } from './curso-detalle-b2semi.component';

describe('CursoDetalleB2semiComponent', () => {
  let component: CursoDetalleB2semiComponent;
  let fixture: ComponentFixture<CursoDetalleB2semiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalleB2semiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalleB2semiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
