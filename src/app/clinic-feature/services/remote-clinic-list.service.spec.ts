import { TestBed, inject } from '@angular/core/testing';

import { RemoteClinicListService } from './remote-clinic-list.service';

describe('RemoteClinicListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteClinicListService]
    });
  });

  it('should be created', inject([RemoteClinicListService], (service: RemoteClinicListService) => {
    expect(service).toBeTruthy();
  }));
});
