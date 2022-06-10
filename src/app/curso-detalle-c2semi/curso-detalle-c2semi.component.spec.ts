import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalleC2semiComponent } from './curso-detalle-c2semi.component';

describe('CursoDetalleC2semiComponent', () => {
  let component: CursoDetalleC2semiComponent;
  let fixture: ComponentFixture<CursoDetalleC2semiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalleC2semiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalleC2semiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
