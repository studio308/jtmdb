import { HttpClient } from '../httpClient';
import { Versionable } from '../versionable';
import { Version } from '../version';
import { DetailsParams } from '../common/detailsParams';
import { CountryOnlyParams } from '../common/CountryOnlyParams';
import { ChangesParams } from '../common/changesParams';
import { LanguageOnlyParams } from '../common/languageOnlyParams';
import { ImagesParams } from './imagesParams';
import { LangAndPageParams } from '../common/langAndPageParams';
import { LangPageRegionParams } from './LangPageRegionParams';
import { SessionParams } from '../sessionParams';

export class Movies implements Versionable {
  private static readonly apiVersion = Version.v3;
  private static readonly basePath = `/${Movies.apiVersion.toString()}/movie`;
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getVersion(): Version {
    return Movies.apiVersion;
  }

  details(movieId: number, params: DetailsParams = null) {
    return this.get(`/${movieId}`, params);
  }

  accountStates(movieId: number, params: SessionParams) {
    return this.get(`/${movieId}/account_states`, params);
  }

  alternativeTitles(movieId: number, params: CountryOnlyParams = null) {
    return this.get(`/${movieId}/alternative_titles`, params);
  }

  changes(movieId: number, params: ChangesParams = null) {
    return this.get(`/${movieId}/changes`, params);
  }

  credits(movieId: number, params: LanguageOnlyParams = null) {
    return this.get(`/${movieId}/credits`, params);
  }

  externalIds(movieId: number) {
    return this.get(`/${movieId}/external_ids`);
  }

  images(movieId: number, params: ImagesParams = null) {
    return this.get(`/${movieId}/images`, params);
  }

  keywords(movieId: number) {
    return this.get(`/${movieId}/keywords`);
  }

  lists(movieId: number, params: LangAndPageParams = null) {
    return this.get(`/${movieId}/lists`, params);
  }

  recommendations(movieId: number, params: LangAndPageParams = null) {
    return this.get(`/${movieId}/recommendations`, params);
  }

  releaseDates(movieId: number) {
    return this.get(`/${movieId}/release_dates`);
  }

  reviews(movieId: number, params: LangAndPageParams = null) {
    return this.get(`/${movieId}/reviews`, params);
  }

  similar(movieId: number, params: LangAndPageParams = null) {
    return this.get(`/${movieId}/similar`, params);
  }

  translations(movieId: number) {
    return this.get(`/${movieId}/translations`);
  }

  videos(movieId: number, params: LanguageOnlyParams = null) {
    return this.get(`/${movieId}/videos`, params);
  }

  watchProviders(movieId: number) {
    return this.get(`/${movieId}/watch/providers`);
  }

  rate(movieId: number, rating: number, params: SessionParams) {
    return this.post(`/${movieId}/rating`, { value: rating }, params);
  }

  deleteRating(movieId: number, params: SessionParams) {
    return this.delete(`/${movieId}/rating`, params);
  }

  latest(params: LanguageOnlyParams = null) {
    return this.get(`/latest`, params);
  }

  nowPlaying(params: LangPageRegionParams = null) {
    return this.get(`/now_playing`, params);
  }

  popular(params: LangPageRegionParams = null) {
    return this.get(`/popular`, params);
  }

  topRated(params: LangPageRegionParams = null) {
    return this.get(`/top_rated`, params);
  }

  upcoming(params: LangPageRegionParams = null) {
    return this.get(`/upcoming`, params);
  }

  private get(path: string, params: {} = null) {
    const fullPath = `${Movies.basePath}${path}`;
    return this.httpClient.get(fullPath, params);
  }

  private post(path: string, body: {}, params: {} = null) {
    const fullPath = `${Movies.basePath}${path}`;
    return this.httpClient.post(fullPath, body, params);
  }

  private delete(path: string, params: {} = null) {
    const fullPath = `${Movies.basePath}${path}`;
    return this.httpClient.delete(fullPath, params);
  }
}
