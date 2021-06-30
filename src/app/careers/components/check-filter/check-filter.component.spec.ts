import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFilterComponent } from './check-filter.component';

describe('CheckFilterComponent', () => {
  let component: CheckFilterComponent;
  let fixture: ComponentFixture<CheckFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
