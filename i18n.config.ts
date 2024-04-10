import en from './locales/en.json';
import { createI18n } from 'vue-i18n';

const i18nConfig = {
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en
  }
};

export default defineI18nConfig(() => i18nConfig);

export const i18n = createI18n(i18nConfig);
