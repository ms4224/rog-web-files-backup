import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RogConsoleComponent } from './rog-console.component';

describe('RogConsoleComponent', () => {
  let component: RogConsoleComponent;
  let fixture: ComponentFixture<RogConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RogConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RogConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
