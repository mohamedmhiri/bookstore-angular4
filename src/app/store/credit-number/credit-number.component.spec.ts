import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditNumberComponent } from './credit-number.component';

describe('CreditNumberComponent', () => {
  let component: CreditNumberComponent;
  let fixture: ComponentFixture<CreditNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
