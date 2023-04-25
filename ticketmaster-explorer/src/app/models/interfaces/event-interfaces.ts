interface Image {
  url: string
}

interface Dates {
  start: {
    localDate: string,
    localTime: string,
  },
}

interface Venue {
  name: string,
  address: {
    line1: string,
  },
}
export interface TicketmasterEvent {
  name: string,
  id: string,
  url: string,
  locale: string,
  images: Image[],
  dates: Dates,
  _links: Links,
  _embedded: {
    venues: Venue[],
  },
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
    events: TicketmasterEvent[],
  },
  page: Page,
  _links: Links,
}
