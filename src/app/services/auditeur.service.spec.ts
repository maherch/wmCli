import { TestBed } from '@angular/core/testing';

import { AuditeurService } from './auditeur.service';

describe('AuditeurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditeurService = TestBed.get(AuditeurService);
    expect(service).toBeTruthy();
  });
});
