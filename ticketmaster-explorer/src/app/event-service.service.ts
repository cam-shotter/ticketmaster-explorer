import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json';
  private apiKey = 'Y4QQA57cE1G6zHQ1GOCmycAX2ghM7P9i';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?classificationName=music&dmaId=324&apikey=${this.apiKey}`);
  }
}
