import {SearchParams} from './searchParams';

export interface MoviesSearchParams extends SearchParams {
    language?: string
    region?: string
    include_adult?: boolean
    year?: number
    primary_release_year?: number
}