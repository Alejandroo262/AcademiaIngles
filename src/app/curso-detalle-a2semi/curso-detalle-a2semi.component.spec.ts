import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalleA2semiComponent } from './curso-detalle-a2semi.component';

describe('CursoDetalleA2semiComponent', () => {
  let component: CursoDetalleA2semiComponent;
  let fixture: ComponentFixture<CursoDetalleA2semiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalleA2semiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalleA2semiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
