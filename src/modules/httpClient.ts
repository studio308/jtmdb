import axios from 'axios';
import {Options} from './options';

export class HttpClient {
    private readonly v4AccessToken: string
    private static baseUrl = 'https://api.themoviedb.org';

    constructor(options: Options) {
        this.v4AccessToken = options.v4AccessToken
    }

    get(path: string, params?: {}) {
        const url = this.createUrl(path, params)
        return this.request(HttpMethod.GET, url)
    }

    private createUrl(path: string, params: {}) {
        let queryString = ''
        if (Object.keys(params).length > 0) {
            queryString = `?${this.prepareQueryString(params)}`
        }
        return `${HttpClient.baseUrl}${path}${queryString}`
    }

    private prepareQueryString(params: {[key: string]: any}) {
        return Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
        }).join('&');
    }

    private request(method: HttpMethod, url: string) {
        return axios.request({
            method,
            url,
            headers: {
                'Authorization': `Bearer ${this.v4AccessToken}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(resp => resp.data)
    }
}

enum HttpMethod {
    OPTIONS = 'options',
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    PATCH = 'patch',
    DELETE = 'delete',
}
