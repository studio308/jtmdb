import { HttpClient } from './modules/httpClient';
import { List } from './modules/list/list';
import { Movies } from './modules/movies/movies';
import { Options } from './modules/options';
import { People } from './modules/people/people';
import { Search } from './modules/search/search';

export class Jtmdb {
  httpClient: HttpClient;
  list: List;
  movies: Movies;
  people: People;
  search: Search;

  constructor(options: Options) {
    this.httpClient = new HttpClient(options);
    this.list = new List(this.httpClient);
    this.movies = new Movies(this.httpClient);
    this.people = new People(this.httpClient);
    this.search = new Search(this.httpClient);
  }

  get(path: string, params: { [key: string]: any } = null) {
    return this.httpClient.get(path, params);
  }

  post(path: string, body: { [key: string]: any }, params: { [key: string]: any } = null) {
    return this.httpClient.post(path, body, params);
  }

  put(path: string, body: { [key: string]: any }, params: { [key: string]: any } = null) {
    return this.httpClient.put(path, body, params);
  }

  delete(path: string, params: { [key: string]: any } = null) {
    return this.httpClient.delete(path, params);
  }
}
