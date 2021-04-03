import { LanguageOnlyParams } from './languageOnlyParams';

export interface ImagesParams extends LanguageOnlyParams {
  include_image_language?: boolean;
}
