import { LanguageOnlyParams } from '../common/languageOnlyParams';

export interface ImagesParams extends LanguageOnlyParams {
  include_image_language?: boolean;
}
