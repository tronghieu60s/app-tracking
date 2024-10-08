/**
 * Learn more about Async-Storage
 * https://react-native-async-storage.github.io/async-storage/docs/usage/
 */

import {APP_DEFAULT_LOCALE, APP_VERSION_DEFAULT} from '@const/config';
import {
  CurrentVersion,
  IsFirstLoading,
  Language,
  ResourceLanguage,
  VisibleCodeDl,
  VisibleImageDl,
  VisibleNameDl,
  VisibleTimeDl,
} from '@const/storage';
import AsyncStorage from '@react-native-community/async-storage';

/**
 * @param  {any} input
 */
const _processInput = (input: any) => {
  if (input instanceof Date) {
    return JSON.stringify(input.getTime());
  }
  return JSON.stringify(input);
};

/**
 * @param  {any} output
 */
const _processOutput = (output: any) => {
  if (output === null) {
    return output;
  }
  let result;
  try {
    result = JSON.parse(output);
  } catch (e) {
    /* save to localStorage without JSON.stringify will catch. */
    result = output;
  }
  return result;
};

export const getLanguage = async () => {
  const result = (await AsyncStorage.getItem(Language)) || APP_DEFAULT_LOCALE;
  return _processOutput(result);
};

export const setLanguage = (resource = 'vi') => {
  const _resource = _processInput(resource);
  AsyncStorage.setItem(Language, _resource);
};

export const getIsFirstLoading = async () => {
  const result = (await AsyncStorage.getItem(IsFirstLoading)) || true;
  return _processOutput(result);
};

export const setIsFirstLoading = (resource = true) => {
  const _resource = _processInput(resource);
  AsyncStorage.setItem(IsFirstLoading, _resource);
};

export const getResourceLanguage = async () => {
  const result = await AsyncStorage.getItem(ResourceLanguage);
  return _processOutput(result);
};

export const setResourceLanguage = (resource = {}) => {
  const _resource = _processInput(resource);
  AsyncStorage.setItem(ResourceLanguage, _resource);
};

export const getCurrentVersion = async () => {
  const result =
    (await AsyncStorage.getItem(CurrentVersion)) || APP_VERSION_DEFAULT;
  return _processOutput(result);
};

export const setCurrentVersion = (value = APP_VERSION_DEFAULT) => {
  const _resource = _processInput(value);
  AsyncStorage.setItem(CurrentVersion, _resource);
};

/* Visible State */

export const getVisibleImageDlExplain = async () => {
  const result = (await AsyncStorage.getItem(VisibleImageDl)) || true;
  return _processOutput(result);
};

export const setVisibleImageDlExplain = (resource = true) => {
  const _resource = _processInput(resource);
  AsyncStorage.setItem(VisibleImageDl, _resource);
};

export const getVisibleCodeDlExplain = async () => {
  const result = (await AsyncStorage.getItem(VisibleCodeDl)) || true;
  return _processOutput(result);
};

export const setVisibleCodeDlExplain = (resource = true) => {
  const _resource = _processInput(resource);
  AsyncStorage.setItem(VisibleCodeDl, _resource);
};

export const getVisibleNameDlExplain = async () => {
  const result = (await AsyncStorage.getItem(VisibleNameDl)) || true;
  return _processOutput(result);
};

export const setVisibleNameDlExplain = (resource = true) => {
  const _resource = _processInput(resource);
  AsyncStorage.setItem(VisibleNameDl, _resource);
};

export const getVisibleTimeDlExplain = async () => {
  const result = (await AsyncStorage.getItem(VisibleTimeDl)) || true;
  return _processOutput(result);
};

export const setVisibleTimeDlExplain = (resource = true) => {
  const _resource = _processInput(resource);
  AsyncStorage.setItem(VisibleTimeDl, _resource);
};
