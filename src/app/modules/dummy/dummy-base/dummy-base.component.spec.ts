import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyBaseComponent } from './dummy-base.component';

describe('DummyBaseComponent', () => {
  let component: DummyBaseComponent;
  let fixture: ComponentFixture<DummyBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
