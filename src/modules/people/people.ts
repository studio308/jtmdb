import { Versionable } from '../versionable';
import { Version } from '../version';
import { HttpClient } from '../httpClient';
import { DetailsParams } from '../common/detailsParams';
import { ChangesParams } from '../common/changesParams';
import { LanguageOnlyParams } from '../common/languageOnlyParams';
import { LangAndPageParams } from '../common/langAndPageParams';

export class People implements Versionable {
  private static readonly apiVersion = Version.v3;
  private static readonly basePath = `/${People.apiVersion.toString()}/person`;
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getVersion(): Version {
    return People.apiVersion;
  }

  details(personId: number, params: DetailsParams = null) {
    return this.get(`/${personId}`, params);
  }

  changes(personId: number, params: ChangesParams = null) {
    return this.get(`/${personId}/changes`, params);
  }

  movieCredits(personId: number, params: LanguageOnlyParams = null) {
    return this.get(`/${personId}/movie_credits`, params);
  }

  tvCredits(personId: number, params: LanguageOnlyParams = null) {
    return this.get(`/${personId}/tv_credits`, params);
  }

  combinedCredits(personId: number, params: LanguageOnlyParams = null) {
    return this.get(`/${personId}/combined_credits`, params);
  }

  externalIds(personId: number, params: LanguageOnlyParams = null) {
    return this.get(`/${personId}/external_ids`, params);
  }

  images(personId: number) {
    return this.get(`/${personId}/images`);
  }

  taggedImages(personId: number, params: LangAndPageParams = null) {
    return this.get(`/${personId}/tagged_images`, params);
  }

  translations(personId: number, params: LanguageOnlyParams = null) {
    return this.get(`/${personId}/translations`, params);
  }

  latest(params: LanguageOnlyParams = null) {
    return this.get(`/latest`, params);
  }

  popular(params: LangAndPageParams = null) {
    return this.get(`/popular`, params);
  }

  private get(path: string, params: {} = null) {
    const fullPath = `${People.basePath}${path}`;
    return this.httpClient.get(fullPath, params);
  }
}
