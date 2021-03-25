import {HttpClient} from '../httpClient'
import {Versionable} from '../versionable';
import {Version} from '../version';
import {SearchParams} from '../search/searchParams';

export class Api implements Versionable {
    private static readonly apiVersion = Version.v3
    private static readonly basePath = `/${Api.apiVersion.toString()}/movie`
    private httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    }

    getVersion(): Version {
        return Api.apiVersion;
    }

    details(movieId: number, appends: string[] = []) {
        return this.httpClient.get(`/movie/${movieId}`)
    }

    accountStates(movieId: number) {
        return this.get(`/movie/${movieId}/account_states`)
    }

    private get(path: string) {
        const fullPath = `${Api.basePath}${path}`
        return this.httpClient.get(fullPath)
    }
}