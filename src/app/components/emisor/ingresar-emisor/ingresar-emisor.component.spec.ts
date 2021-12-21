import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarEmisorComponent } from './ingresar-emisor.component';

describe('IngresarEmisorComponent', () => {
  let component: IngresarEmisorComponent;
  let fixture: ComponentFixture<IngresarEmisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarEmisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarEmisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
