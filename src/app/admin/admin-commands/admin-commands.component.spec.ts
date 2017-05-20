import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommandsComponent } from './admin-commands.component';

describe('AdminCommandsComponent', () => {
  let component: AdminCommandsComponent;
  let fixture: ComponentFixture<AdminCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
