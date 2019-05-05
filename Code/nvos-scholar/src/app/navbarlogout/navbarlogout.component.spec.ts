import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlogoutComponent } from './navbarlogout.component';

describe('NavbarlogoutComponent', () => {
  let component: NavbarlogoutComponent;
  let fixture: ComponentFixture<NavbarlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
