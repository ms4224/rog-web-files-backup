import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatOnlyComponent } from './chat-only.component';

describe('ChatOnlyComponent', () => {
  let component: ChatOnlyComponent;
  let fixture: ComponentFixture<ChatOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
