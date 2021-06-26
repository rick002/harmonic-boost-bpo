import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationAreaComponent } from './pagination-area.component';

describe('PaginationAreaComponent', () => {
  let component: PaginationAreaComponent;
  let fixture: ComponentFixture<PaginationAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
