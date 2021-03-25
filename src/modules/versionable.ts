import { Version } from './version';

export interface Versionable {
  getVersion(): Version;
}
