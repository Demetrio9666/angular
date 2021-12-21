import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editar2EmisorComponent } from './editar2-emisor.component';

describe('Editar2EmisorComponent', () => {
  let component: Editar2EmisorComponent;
  let fixture: ComponentFixture<Editar2EmisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editar2EmisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Editar2EmisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
