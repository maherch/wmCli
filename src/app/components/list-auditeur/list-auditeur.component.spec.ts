import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAuditeurComponent } from './list-auditeur.component';

describe('ListAuditeurComponent', () => {
  let component: ListAuditeurComponent;
  let fixture: ComponentFixture<ListAuditeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAuditeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
