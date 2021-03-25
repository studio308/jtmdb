import { SearchParams } from './searchParams';

export interface PeopleSearchParams extends SearchParams {
  language?: string;
  region?: string;
  include_adult?: boolean;
}
