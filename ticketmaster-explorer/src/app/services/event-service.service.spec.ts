import { TestBed } from '@angular/core/testing';

import { EventService } from './event-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getEvents', () => {
    describe('given valid parameters', () => {
      it('should not return null response', (done) => {
          const keyword = "Metallica";
          const location = "37.566535,126.9779692";
          const startDatetime = new Date("2019-09-01T00:00:00");
          const endDatetime = new Date("2019-09-30T00:00:00");
          service.getEvents(keyword, location, startDatetime, endDatetime).subscribe(data => {
              expect(data).not.toBeNull();
              done();
          });
      })
    });
})
});
