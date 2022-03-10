import {atom} from 'recoil';

export const logTrackingState = atom<string>({
  key: 'logTrackingState',
  default: '',
});

export const requestTrackingReloadState = atom<number>({
  key: 'requestTrackingReloadState',
  default: Math.random(),
});

export const requestTrackingOpenModalAddState = atom<number>({
  key: 'requestTrackingOpenModalAddState',
  default: 0,
});
