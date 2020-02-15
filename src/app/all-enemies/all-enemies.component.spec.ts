import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEnemiesComponent } from './all-enemies.component';

describe('AllEnemiesComponent', () => {
  let component: AllEnemiesComponent;
  let fixture: ComponentFixture<AllEnemiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEnemiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEnemiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
