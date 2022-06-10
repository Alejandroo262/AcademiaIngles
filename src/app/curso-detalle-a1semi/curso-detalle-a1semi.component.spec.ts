import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalleA1semiComponent } from './curso-detalle-a1semi.component';

describe('CursoDetalleA1semiComponent', () => {
  let component: CursoDetalleA1semiComponent;
  let fixture: ComponentFixture<CursoDetalleA1semiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalleA1semiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalleA1semiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
