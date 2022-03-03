import {atom} from 'recoil';

export const requestTrackingReloadState = atom<number>({
  key: 'requestDeliveryTrackingReloadState',
  default: Math.random(),
});
