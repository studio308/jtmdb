import { Account } from './modules/account/account';
import { Movies } from './modules/movies/movies';
import { HttpClient } from './modules/httpClient';
import { Search } from './modules/search/search';
import { Options } from './modules/options';

export class Jtmdb {
  httpClient: HttpClient;
  account: Account;
  movies: Movies;
  search: Search;

  constructor(options: Options) {
    this.httpClient = new HttpClient(options);
    this.account = new Account(this.httpClient);
    this.movies = new Movies(this.httpClient);
    this.search = new Search(this.httpClient);
  }

  get(path: string, params: { [key: string]: any } = null) {
    return this.httpClient.get(path, params);
  }
}
