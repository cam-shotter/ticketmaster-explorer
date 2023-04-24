import { Component, OnInit } from '@angular/core';
import { EventService } from './event-service.service';

interface EventDateTime {
  start: Date;
  end: Date;
  format?: string; // Todo create enum of accepted DateTime formats
}

interface EventDetails {
  eventDateTimes: EventDateTime[];
  prices: number[];
  venues: string[];
  locations: string[];
}
interface Event extends EventDetails {
  id: number;
  name: string;
}

@Component({
  selector: 'ticketmaster-explorer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ticketmaster-explorer';

  events: any[] | undefined;

  constructor(private readonly eventService: EventService) {

  }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(response => {
        this.events = response._embedded.events;
      });
  }
}
