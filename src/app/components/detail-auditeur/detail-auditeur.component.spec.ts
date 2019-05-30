import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAuditeurComponent } from './detail-auditeur.component';

describe('DetailAuditeurComponent', () => {
  let component: DetailAuditeurComponent;
  let fixture: ComponentFixture<DetailAuditeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAuditeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAuditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
