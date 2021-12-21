import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmisorComponent } from './tabla-emisor.component';

describe('TablaEmisorComponent', () => {
  let component: TablaEmisorComponent;
  let fixture: ComponentFixture<TablaEmisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEmisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEmisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
