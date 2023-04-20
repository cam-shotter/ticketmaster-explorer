import { Time } from '@angular/common';
import { Component } from '@angular/core';

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
export class AppComponent {
  title = 'ticketmaster-explorer';
  events: Event[] = [
    {
      id: 1,
      name: 'Event 1',
      eventDateTimes: [{
        start: new Date('2021-01-01 10:00'),
        end: new Date('2021-01-01 12:00'),
      }],
      prices: [10],
      venues: ['Venue 1'],
      locations: ['Location 1'],
    },
    {
      id: 2,
      name: 'Event 2',
      eventDateTimes: [{
        start: new Date('2021-01-02 10:00'),
        end: new Date('2021-01-02 12:00'),
      }],
      prices: [20],
      venues: ['Venue 2'],
      locations: ['Location 2'],
    }
  ]
}
