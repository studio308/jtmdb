import { HttpClient } from '../httpClient';
import { SearchParams } from './searchParams';
import { CollectionsSearchParams } from './collectionsSearchParams';
import { MoviesSearchParams } from './moviesSearchParams';
import { MultiSearchParams } from './multiSearchParams';
import { PeopleSearchParams } from './peopleSearchParams';
import { TvShowsSearchParams } from './tvShowsSearchParams';
import { Version } from '../version';
import { Versionable } from '../versionable';

export class Search implements Versionable {
  private static readonly apiVersion = Version.v3;
  private static readonly basePath = `/${Search.apiVersion.toString()}/search`;
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getVersion(): Version {
    return Search.apiVersion;
  }

  companies(params: SearchParams) {
    return this.get('/company', params);
  }

  collections(params: CollectionsSearchParams) {
    return this.get('/collection', params);
  }

  keywords(params: SearchParams) {
    return this.get('/keyword', params);
  }

  movies(params: MoviesSearchParams) {
    return this.get('/movie', params);
  }

  multi(params: MultiSearchParams) {
    return this.get('/multi', params);
  }

  people(params: PeopleSearchParams) {
    return this.get('/person', params);
  }

  tvShows(params: TvShowsSearchParams) {
    return this.get('/tv', params);
  }

  private get(path: string, params: SearchParams) {
    const fullPath = `${Search.basePath}${path}`;
    return this.httpClient.get(fullPath, params);
  }
}
