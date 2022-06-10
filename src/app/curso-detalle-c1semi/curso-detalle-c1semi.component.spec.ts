import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalleC1semiComponent } from './curso-detalle-c1semi.component';

describe('CursoDetalleC1semiComponent', () => {
  let component: CursoDetalleC1semiComponent;
  let fixture: ComponentFixture<CursoDetalleC1semiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetalleC1semiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalleC1semiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
