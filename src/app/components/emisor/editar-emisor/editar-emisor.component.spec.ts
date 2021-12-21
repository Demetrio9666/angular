import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmisorComponent } from './editar-emisor.component';

describe('EditarEmisorComponent', () => {
  let component: EditarEmisorComponent;
  let fixture: ComponentFixture<EditarEmisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEmisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEmisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
