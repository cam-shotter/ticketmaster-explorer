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
