import { Movies } from './modules/movies/movies';
import { HttpClient } from './modules/httpClient';
import { Search } from './modules/search/search';
import { Options } from './modules/options';

export class Jtmdb {
  httpClient: HttpClient;
  movies: Movies;
  search: Search;

  constructor(options: Options) {
    this.httpClient = new HttpClient(options);
    this.movies = new Movies(this.httpClient);
    this.search = new Search(this.httpClient);
  }

  get(path: string, params: { [key: string]: any } = null) {
    return this.httpClient.get(path, params);
  }

  post(path: string, body: { [key: string]: any }, params: { [key: string]: any } = null) {
    return this.httpClient.post(path, body, params);
  }

  delete(path: string, params: { [key: string]: any } = null) {
    return this.httpClient.delete(path, params);
  }
}
