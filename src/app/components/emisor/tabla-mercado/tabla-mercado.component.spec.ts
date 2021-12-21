import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMercadoComponent } from './tabla-mercado.component';

describe('TablaMercadoComponent', () => {
  let component: TablaMercadoComponent;
  let fixture: ComponentFixture<TablaMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMercadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
