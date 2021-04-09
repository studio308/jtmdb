import { LanguageOnlyParams } from './languageOnlyParams';

export interface LangAndPageParams extends LanguageOnlyParams {
  page?: number;
}
