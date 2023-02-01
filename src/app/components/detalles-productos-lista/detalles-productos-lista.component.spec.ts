import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesProductosListaComponent } from './detalles-productos-lista.component';

describe('DetallesProductosListaComponent', () => {
  let component: DetallesProductosListaComponent;
  let fixture: ComponentFixture<DetallesProductosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesProductosListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesProductosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
