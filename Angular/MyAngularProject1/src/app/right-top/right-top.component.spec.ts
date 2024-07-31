import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTopComponent } from './right-top.component';

describe('RightTopComponent', () => {
  let component: RightTopComponent;
  let fixture: ComponentFixture<RightTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
