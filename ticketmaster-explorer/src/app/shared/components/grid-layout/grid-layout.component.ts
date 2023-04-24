import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ticketmaster-explorer-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridLayoutComponent {
  @Input() events: Event[] = [];
}
