import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { TicketmasterEvent } from 'src/app/models/interfaces/event-interfaces';
import { latlongValidator } from 'src/app/models/validators/latlong-validator';
import { EventService } from 'src/app/services/event-service.service';

@Component({
  selector: 'ticketmaster-explorer-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  @Output() eventsResponse = new EventEmitter<TicketmasterEvent[]>();

  // I'd usually set this up using the formbuilder service,
  // and set up a form model in a separate file
  searchControl: FormControl<string | null> = new FormControl('', Validators.required);
  locationControl: FormControl<string | null> = new FormControl('', [latlongValidator(), Validators.required]);
  startDateTimeControl: FormControl<Date | null> = new FormControl(new Date(), Validators.required);
  endDateTimeControl: FormControl<Date | null> = new FormControl(new Date(), Validators.required);

  filteredEvents$: Subject<TicketmasterEvent[]> = new Subject<TicketmasterEvent[]>();
  filteredEvents: Observable<TicketmasterEvent[]> = this.filteredEvents$.asObservable();

  constructor(private eventService: EventService) {}

  // ngOnInit() {
    // I like this way in principle, but it started to take too long and get a little over engineered
    // I'm just going to leave it here to show what I'd ideally like to do
    // But I'm going to go with the simpler form submit way for now
    
    // this.filteredEvents = combineLatest([
    //   this.searchControl.valueChanges,
    //   this.locationControl.valueChanges,
    //   this.startDateTimeControl.valueChanges,
    //   this.endDateTimeControl.valueChanges,
    // ]).pipe(
    //   startWith(['', '', '', '']),
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   switchMap(([keyword, location, startDateTime, endDateTime]) => {
    //     return this.eventService.getEvents(keyword, location, startDateTime, endDateTime).pipe(
    //       map(response => response._embedded.events)
    //     );
    //   })
    // );

    // this.filteredEvents.subscribe(events => {
    //   this.eventsResponse.emit(events);
    // });
  // }

  // displayFn(event: TicketmasterEvent): string {
  //   return event && event.name ? event.name : '';
  // }

  searchEvents(searchControl: string | null, locationControl: string | null, startDateTimeControl: Date | null, endDateTimeControl: Date | null) {
    const location = locationControl ? locationControl.toString() : '';
    const startDatetime = startDateTimeControl ? new Date(startDateTimeControl) : new Date();
    const endDatetime = endDateTimeControl ? new Date(endDateTimeControl): new Date(startDatetime.getTime() + 7 * 24 * 60 * 60 * 1000); 
    this.eventService.getEvents(searchControl, location, startDatetime, endDatetime).subscribe({
      next: response => {
        this.eventsResponse.emit(response._embedded.events);
      },
      error: error => {
        throw(error);
      }
    });
  }
}
