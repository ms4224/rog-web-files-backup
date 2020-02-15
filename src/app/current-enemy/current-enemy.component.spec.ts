import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentEnemyComponent } from './current-enemy.component';

describe('CurrentEnemyComponent', () => {
  let component: CurrentEnemyComponent;
  let fixture: ComponentFixture<CurrentEnemyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentEnemyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentEnemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
