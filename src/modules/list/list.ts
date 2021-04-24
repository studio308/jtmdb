import { Versionable } from '../versionable';
import { Version } from '../version';
import { HttpClient } from '../httpClient';
import { CreateListBody } from './createListBody';
import { GetListParams } from './getListParams';
import { UpdateListBody } from './updateListBody';
import { MediaItemListBody } from './mediaItemListBody';
import { UpdateMediaItemBody } from './updateMediaItemBody';
import { MediaItem } from './mediaItem';

export class List implements Versionable {
  private static readonly apiVersion = Version.v4;
  private static readonly basePath = `/${List.apiVersion.toString()}/list`;
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getVersion(): Version {
    return List.apiVersion;
  }

  get(listId: number, params: GetListParams = null) {
    return this.getRequest(`/${listId}`, params);
  }

  create(body: CreateListBody) {
    return this.postRequest('', body);
  }

  update(listId: number, body: UpdateListBody) {
    return this.putRequest(`/${listId}`, body);
  }

  clear(listId: number) {
    return this.getRequest(`/${listId}/clear`);
  }

  delete(listId: number) {
    return this.deleteRequest(`/${listId}`);
  }

  addItems(listId: number, body: MediaItemListBody) {
    return this.postRequest(`/${listId}/items`, body);
  }

  updateItems(listId: number, body: UpdateMediaItemBody) {
    return this.putRequest(`/${listId}/items`, body);
  }

  removeItems(listId: number, body: MediaItemListBody) {
    return this.deleteRequest(`/${listId}/items`, body);
  }

  checkItemStatus(listId: number, params: MediaItem) {
    return this.getRequest(`/${listId}/item_status`, params);
  }

  private getRequest(path: string, params: {} = null) {
    const fullPath = `${List.basePath}${path}`;
    return this.httpClient.get(fullPath, params);
  }

  private postRequest(path: string, body: {}, params: {} = null) {
    const fullPath = `${List.basePath}${path}`;
    return this.httpClient.post(fullPath, body, params);
  }

  private putRequest(path: string, body: {}, params: {} = null) {
    const fullPath = `${List.basePath}${path}`;
    return this.httpClient.put(fullPath, body, params);
  }

  private deleteRequest(path: string, body: {} = null, params: {} = null) {
    const fullPath = `${List.basePath}${path}`;
    return this.httpClient.delete(fullPath, body, params);
  }
}
