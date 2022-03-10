import {
  getVisibleCodeDlExplain,
  getVisibleImageDlExplain,
  getVisibleNameDlExplain,
  getVisibleTimeDlExplain,
  setVisibleCodeDlExplain,
  setVisibleImageDlExplain,
  setVisibleNameDlExplain,
  setVisibleTimeDlExplain,
} from '@core/storage';
import {atom, selector} from 'recoil';

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

/* Visible State */

export const visibleImageDlAtom = atom<boolean>({
  key: 'visibleImageDlAtom',
  default: getVisibleImageDlExplain(),
});

export const visibleImageDlState = selector<boolean>({
  key: 'visibleImageDlState',
  get: ({get}) => get(visibleImageDlAtom),
  set: ({set}, newValue) => {
    set(visibleImageDlAtom, newValue);
    setVisibleImageDlExplain(newValue as boolean);
  },
});

export const visibleCodeDlAtom = atom<boolean>({
  key: 'visibleCodeDlAtom',
  default: getVisibleCodeDlExplain(),
});

export const visibleCodeDlState = selector<boolean>({
  key: 'visibleCodeDlState',
  get: ({get}) => get(visibleCodeDlAtom),
  set: ({set}, newValue) => {
    set(visibleCodeDlAtom, newValue);
    setVisibleCodeDlExplain(newValue as boolean);
  },
});

export const visibleNameDlAtom = atom<boolean>({
  key: 'visibleNameDlAtom',
  default: getVisibleNameDlExplain(),
});

export const visibleNameDlState = selector<boolean>({
  key: 'visibleNameDlState',
  get: ({get}) => get(visibleNameDlAtom),
  set: ({set}, newValue) => {
    set(visibleNameDlAtom, newValue);
    setVisibleNameDlExplain(newValue as boolean);
  },
});

export const visibleTimeDlAtom = atom<boolean>({
  key: 'visibleTimeDlAtom',
  default: getVisibleTimeDlExplain(),
});

export const visibleTimeDlState = selector<boolean>({
  key: 'visibleTimeDlState',
  get: ({get}) => get(visibleTimeDlAtom),
  set: ({set}, newValue) => {
    set(visibleTimeDlAtom, newValue);
    setVisibleTimeDlExplain(newValue as boolean);
  },
});
