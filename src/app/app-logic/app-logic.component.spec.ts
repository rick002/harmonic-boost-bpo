import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLogicComponent } from './app-logic.component';

describe('AppLogicComponent', () => {
  let component: AppLogicComponent;
  let fixture: ComponentFixture<AppLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
