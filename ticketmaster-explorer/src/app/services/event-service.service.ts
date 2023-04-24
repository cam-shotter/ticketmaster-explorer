import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Event {
  name: string,
  type: string,
  id: string,
  test: boolean,
  url: string,
  locale: string,
}

export interface Links {
  self: {
    href: string
  },
  next: {
    href: string
  },
  last: {
    href: string
  },
  first: {
    href: string
  }
}

export interface Page {
  size: number,
  totalElements: number,
  totalPages: number,
  number: number
}

export interface GetEventResponse {
  _embedded: {
    events: Event[],
  },
  page: Page,
  _links: LinkStyle,
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json';
  // Usually I'd store this in an environment variable which was set in the build process which would be stored in an environments file
  // Since it's a free API key, I'm just hardcoding it here
  private apiKey = 'Y4QQA57cE1G6zHQ1GOCmycAX2ghM7P9i';

  constructor(private http: HttpClient) {}

  getEvents(keyword: string, location: string, startDatetime: Date, endDatetime: Date): Observable<any> {
    // Ticketmaster API requires size and page parameters
    // I'd normally set up a pagination component to allow the user to select the page and amount of results they want to view
    // For the purposes of this exercise, I'm just hardcoding them
    const size = 10;
    const page = 1;
    let params = new HttpParams();
    params = params.append('apikey', this.apiKey);
    params = params.append('keyword', keyword);
    params = params.append('latlong', location);
    // Ticketmaster API requires ISO 8601 format, but the Date.toISOString() method returns a string in a slightly different format
    // The slice(0, -5) removes the last 5 characters (the milliseconds and the 'Z' at the end)
    // It's not the most elegant solution, but it works given the time constraints
    params = params.append('startDateTime', startDatetime.toISOString().slice(0, -5) + 'Z');
    params = params.append('endDateTime', endDatetime.toISOString().slice(0, -5) + 'Z');
    params = params.append('size', size);
    params = params.append('page', page);

    return this.http.get<GetEventResponse>(this.apiUrl, { params });
  }
}
