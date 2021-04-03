import { HttpClient } from '../httpClient';
import { Version } from '../version';
import { Versionable } from '../versionable';

export class Account implements Versionable {
  private static readonly apiVersion = Version.v3;
  private static readonly basePath = `/${Account.apiVersion.toString()}`;
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getVersion(): Version {
    return Account.apiVersion;
  }

  // details(params: SearchParams) {
  //   return this.get('/account', params);
  // }
  //
  // createdLists(accountId: number, params: CollectionsSearchParams) {
  //   return this.get(`/account/${accountId}/lists`, params);
  // }
  //
  // favoriteMovies(accountId: number, params: SearchParams) {
  //   return this.get(`/account/${accountId}/favorite/movies`, params);
  // }
  //
  // favoriteTvShows(accountId: number, params: MoviesSearchParams) {
  //   return this.get(`/account/${accountId}/favorite/tv`, params);
  // }
  //
  // markAsFavorite(accountId: number, params: MultiSearchParams) {
  //   return this.post(`/account/${accountId}/favorite`, params);
  // }
  //
  // ratedMovies(accountId: number, params: PeopleSearchParams) {
  //   return this.get(`/account/${accountId}/rated/movies`, params);
  // }
  //
  // ratedTvShows(accountId: number, params: TvShowsSearchParams) {
  //   return this.get(`/account/${accountId}/rated/tv`, params);
  // }
  //
  // ratedTvEpisodes(accountId: number, params: TvShowsSearchParams) {
  //   return this.get(`/account/${accountId}/rated/tv/episodes`, params);
  // }
  //
  // movieWatchlist(accountId: number, params: TvShowsSearchParams) {
  //   return this.get(`/account/${accountId}/watchlist/movies`, params);
  // }
  //
  // tvWatchlist(accountId: number, params: TvShowsSearchParams) {
  //   return this.get(`/account/${accountId}/watchlist/tv`, params);
  // }
  //
  // addToWatchlist(accountId: number, params: TvShowsSearchParams) {
  //   return this.post(`/account/${accountId}/watchlist`, params);
  // }
  //
  // private get(path: string, params: SearchParams) {
  //   const fullPath = `${Account.basePath}${path}`;
  //   return this.httpClient.get(fullPath, params);
  // }
  //
  // private post(path: string, params: SearchParams) {
  //   const fullPath = `${Account.basePath}${path}`;
  //   return this.httpClient.post(fullPath, params);
  // }
}
