import { Api as Movies } from './modules/movies/api';
import { HttpClient } from './modules/httpClient';
import { Api as Search } from './modules/search/api';
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
}
