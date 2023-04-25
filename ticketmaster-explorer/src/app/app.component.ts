import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventService } from './services/event-service.service';
import { Subject } from 'rxjs';
import { GetEventResponse } from './models/interfaces/event-interfaces';

@Component({
  selector: 'ticketmaster-explorer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ticketmaster-explorer';

  // This should be a TicketMasterEvent interface but don't have the time to property type it out this time
  // events: TicketmasterEvent[] | undefined;
  // .subscribe(response => {
    //   this.events = response;
    // });
    
  constructor(private readonly eventService: EventService) {}

  private eventResponseSubject = new Subject<GetEventResponse>();
  eventResponse$ = this.eventService.getEventsSubject();

  ngOnInit() {
    const keyword = 'music';
    const location = '37.7749,-122.4194';
    const startDatetime = new Date();
    const endDatetime = new Date(startDatetime.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
    this.eventService.getEvents(keyword, location, startDatetime, endDatetime)
      .subscribe({
        next: response => {
          this.eventResponseSubject.next(response);
        },
        error: error => {
          throw(error);
        }
      });
  }



  ngOnDestroy() {
    console.log('destroying app component');
    // this.subscription.unsubscribe();
  }
}
