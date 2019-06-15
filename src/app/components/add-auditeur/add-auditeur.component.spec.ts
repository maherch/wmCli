import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuditeurComponent } from './add-auditeur.component';

describe('AddAuditeurComponent', () => {
  let component: AddAuditeurComponent;
  let fixture: ComponentFixture<AddAuditeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAuditeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
