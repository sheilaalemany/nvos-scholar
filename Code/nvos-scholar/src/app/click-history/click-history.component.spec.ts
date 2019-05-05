import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickHistoryComponent } from './click-history.component';

describe('ClickHistoryComponent', () => {
  let component: ClickHistoryComponent;
  let fixture: ComponentFixture<ClickHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
