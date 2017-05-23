import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPusherComponent } from './book-pusher.component';

describe('BookPusherComponent', () => {
  let component: BookPusherComponent;
  let fixture: ComponentFixture<BookPusherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPusherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPusherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
