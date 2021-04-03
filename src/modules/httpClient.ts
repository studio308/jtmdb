import axios from 'axios';
import { Options } from './options';
import { HttpMethod } from './httpMethod';

export class HttpClient {
  private readonly v4AccessToken: string;
  private static baseUrl = 'https://api.themoviedb.org';

  constructor(options: Options) {
    if (typeof options.v4AccessToken !== 'string' || options.v4AccessToken.length === 0) {
      throw new Error('v4AccessToken is invalid');
    }
    this.v4AccessToken = options.v4AccessToken;
  }

  get(path: string, params: {} = null) {
    const url = this.createUrl(path, params);
    return this.request(HttpMethod.GET, url);
  }

  post(path: string, body: {}, params: {} = null) {
    const url = this.createUrl(path, params);
    return this.request(HttpMethod.POST, url, body);
  }

  delete(path: string, params: {} = null) {
    const url = this.createUrl(path, params);
    return this.request(HttpMethod.DELETE, url);
  }

  private createUrl(path: string, params: {} = null) {
    let queryString = '';
    if (params && Object.keys(params).length > 0) {
      queryString = `?${this.prepareQueryString(params)}`;
    }
    return `${HttpClient.baseUrl}${path}${queryString}`;
  }

  private prepareQueryString(params: { [key: string]: any }) {
    return Object.keys(params)
      .map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      })
      .join('&');
  }

  private request(method: HttpMethod, url: string, data?: {}) {
    if (this.v4AccessToken === '')
      return axios
        .request({
          method,
          url,
          data,
          headers: {
            Authorization: `Bearer ${this.v4AccessToken}`,
            'Content-Type': 'application/json;charset=utf-8',
          },
        })
        .then((resp) => resp.data);
  }
}
