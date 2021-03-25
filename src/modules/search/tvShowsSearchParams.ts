import { SearchParams } from './searchParams';

export interface TvShowsSearchParams extends SearchParams {
  language?: string;
  first_air_date_year?: number;
  include_adult?: boolean;
}
