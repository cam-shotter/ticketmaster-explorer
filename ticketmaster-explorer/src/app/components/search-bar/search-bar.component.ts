import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ticketmaster-explorer-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {}
