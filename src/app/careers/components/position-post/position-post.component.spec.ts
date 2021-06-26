import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionPostComponent } from './position-post.component';

describe('PositionPostComponent', () => {
  let component: PositionPostComponent;
  let fixture: ComponentFixture<PositionPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
