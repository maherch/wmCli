import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAuditeurComponent } from './update-auditeur.component';

describe('UpdateAuditeurComponent', () => {
  let component: UpdateAuditeurComponent;
  let fixture: ComponentFixture<UpdateAuditeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAuditeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
