import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterrelativeComponent } from './footerrelative.component';

describe('FooterrelativeComponent', () => {
  let component: FooterrelativeComponent;
  let fixture: ComponentFixture<FooterrelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterrelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterrelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
