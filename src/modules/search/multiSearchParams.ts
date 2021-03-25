import { SearchParams } from './searchParams';

export interface MultiSearchParams extends SearchParams {
  language?: string;
  region?: string;
  include_adult?: boolean;
}
