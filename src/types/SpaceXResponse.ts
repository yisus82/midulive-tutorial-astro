export interface SpaceXResponse {
  docs: Doc[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: number;
}

export interface Doc {
  fairings?: Fairings;
  links: Links;
  static_fire_date_utc: any;
  static_fire_date_unix: any;
  net: boolean;
  window: any;
  rocket: string;
  success: any;
  failures: any[];
  details: any;
  crew: any[];
  ships: any[];
  capsules: any[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: any;
  id: string;
}

export interface Fairings {
  reused: any;
  recovery_attempt: any;
  recovered: any;
  ships: any[];
}

export interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: any;
  webcast: any;
  youtube_id: any;
  article: any;
  wikipedia: any;
}

export interface Patch {
  small: any;
  large: any;
}

export interface Reddit {
  campaign: any;
  launch: any;
  media: any;
  recovery: any;
}

export interface Flickr {
  small: any[];
  original: any[];
}

export interface Core {
  core: any;
  flight: any;
  gridfins?: boolean;
  legs?: boolean;
  reused?: boolean;
  landing_attempt: any;
  landing_success: any;
  landing_type: any;
  landpad: any;
}
