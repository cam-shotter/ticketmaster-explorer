import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json';
  private apiKey = 'Y4QQA57cE1G6zHQ1GOCmycAX2ghM7P9i';

  constructor(private http: HttpClient) {}

  getEvents(keyword: string, location: string, startDatetime: Date, endDatetime: Date): Observable<any> {
    const size = 10;
    const page = 1;
    let params = new HttpParams();
    params = params.append('apikey', this.apiKey);
    params = params.append('keyword', keyword);
    params = params.append('latlong', location);
    params = params.append('startDateTime', startDatetime.toISOString().slice(0, -5) + 'Z');
    params = params.append('endDateTime', endDatetime.toISOString().slice(0, -5) + 'Z');
    params = params.append('size', size);
    params = params.append('page', page);
    
    return this.http.get<any>(this.apiUrl, { params });
  }
}
