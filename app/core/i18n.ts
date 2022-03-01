import I18n from 'i18n-js';
import {APP_DEFAULT_LOCALE} from '@const/config';

const enTranslation = require('@translations/en.json');
const viTranslation = require('@translations/vi.json');

export const translations = {en: enTranslation, vi: viTranslation};

export const setTranslations = (trans: keyof typeof translations) => {
  I18n.locale = trans;
  I18n.defaultLocale = trans;
  I18n.translations = {[trans]: translations[trans]};
};

I18n.fallbacks = true;
I18n.defaultLocale = APP_DEFAULT_LOCALE;
I18n.defaultSeparator = '>';
I18n.translations = translations;

export default I18n;
