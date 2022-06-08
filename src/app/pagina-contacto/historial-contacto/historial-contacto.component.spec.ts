import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialContactoComponent } from './historial-contacto.component';

describe('HistorialContactoComponent', () => {
  let component: HistorialContactoComponent;
  let fixture: ComponentFixture<HistorialContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
