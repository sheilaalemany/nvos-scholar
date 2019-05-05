import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterfixedComponent } from './footerfixed.component';

describe('FooterfixedComponent', () => {
  let component: FooterfixedComponent;
  let fixture: ComponentFixture<FooterfixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterfixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterfixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
