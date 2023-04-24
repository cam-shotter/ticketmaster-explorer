import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventService } from './services/event-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ticketmaster-explorer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ticketmaster-explorer';

  // This should be a TicketMasterEvent interface but don't have the time to property type it out this time
  events: any[] | undefined;
  subscription: Subscription;

  constructor(private readonly eventService: EventService) {
    this.subscription = this.eventService.getEventsSubject().subscribe(events => {
      this.events = events;
    });
  }

  ngOnInit() {
    const keyword = 'music';
    const location = '37.7749,-122.4194';
    const startDatetime = new Date();
    const endDatetime = new Date(startDatetime.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
    this.eventService.getEvents(keyword, location, startDatetime, endDatetime)
      .subscribe(response => {
        this.events = response._embedded.events;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
