import { Versionable } from '../versionable';
import { Version } from '../version';
import { HttpClient } from '../httpClient';

export class Account implements Versionable {
  private static readonly apiVersion = Version.v4;
  private static readonly basePath = `/${Account.apiVersion.toString()}/list`;
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getVersion(): Version {
    return Account.apiVersion;
  }
}
