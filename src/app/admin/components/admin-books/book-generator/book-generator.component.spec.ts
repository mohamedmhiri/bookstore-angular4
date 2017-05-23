import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGeneratorComponent } from './book-generator.component';

describe('BookGeneratorComponent', () => {
  let component: BookGeneratorComponent;
  let fixture: ComponentFixture<BookGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
