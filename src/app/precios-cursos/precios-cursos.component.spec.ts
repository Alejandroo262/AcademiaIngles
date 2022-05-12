import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosCursosComponent } from './precios-cursos.component';

describe('PreciosCursosComponent', () => {
  let component: PreciosCursosComponent;
  let fixture: ComponentFixture<PreciosCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
