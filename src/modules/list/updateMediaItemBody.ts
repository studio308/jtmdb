import { MediaItem } from './mediaItem';

export interface UpdateMediaItemBody extends MediaItem {
  comment: string;
}
