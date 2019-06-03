import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealiserMissionComponent } from './realiser-mission.component';

describe('RealiserMissionComponent', () => {
  let component: RealiserMissionComponent;
  let fixture: ComponentFixture<RealiserMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealiserMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealiserMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
