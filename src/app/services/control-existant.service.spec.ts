import { TestBed } from '@angular/core/testing';

import { ControlExistantService } from './control-existant.service';

describe('ControlExistantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlExistantService = TestBed.get(ControlExistantService);
    expect(service).toBeTruthy();
  });
});
