import {UserDeliveryType} from '@const/types';
import {slAllDeliveries} from '@core/models';
import {atom, selector} from 'recoil';

export const deliveriesState = selector<UserDeliveryType[]>({
  key: 'deliveriesState',
  get: async ({get}) => {
    get(deliveriesForceLoadState);
    return await slAllDeliveries();
  },
  cachePolicy_UNSTABLE: {
    eviction: 'most-recent',
  },
});

export const deliveriesForceLoadState = atom<number>({
  key: 'deliveriesForceLoadState',
  default: Math.random(),
});
