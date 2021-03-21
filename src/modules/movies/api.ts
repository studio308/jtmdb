import {HttpClient} from '../httpClient'

export class Api {
    apiVersion = 3
    httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    }

    details(movieId: number, appends: string[] = []) {
        const path = `/${this.apiVersion}/movie/${movieId}`
        return this.httpClient.get(path)
    }

    accountStates(movieId: number) {
        const path = `/${this.apiVersion}/movie/${movieId}/account_states`
        return this.httpClient.get(path)
    }
}