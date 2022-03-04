import {translations} from '@core/i18n';
import {getLanguage, setLanguage} from '@core/storage';
import {atom, selector} from 'recoil';

export const themeState = atom<'light' | 'dark'>({
  key: 'themeState',
  default: 'light',
});

export const languageStateAtom = atom<keyof typeof translations>({
  key: 'languageStateAtom',
  default: getLanguage(),
});

export const languageState = selector<keyof typeof translations>({
  key: 'languageState',
  get: ({get}) => get(languageStateAtom),
  set: ({set}, newValue) => {
    set(languageStateAtom, newValue);
    setLanguage(newValue as keyof typeof translations);
  },
});

export const loadingState = atom<boolean>({
  key: 'loadingState',
  default: false,
});
