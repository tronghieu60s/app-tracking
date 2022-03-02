import Tracking from '@components/Common/Tracking';
import {UserDeliveryType} from '@const/types';
import {delDeliveryById} from '@core/models';
import {
  deliveriesForceLoadState,
  deliveriesState,
} from '@reducers/deliveriesReducer';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {useTailwind} from 'tailwind-rn';

export default function HomeScreen() {
  const tailwind = useTailwind();
  const deliveries = useRecoilValue(deliveriesState);
  const setDeliveriesForceLoad = useSetRecoilState(deliveriesForceLoadState);

  const onPressDelete = useCallback(
    async (delivery: UserDeliveryType) => {
      const deleteDelivery = await delDeliveryById(delivery.id_tracking);
      if (deleteDelivery) {
        setDeliveriesForceLoad(Math.random());
      }
    },
    [setDeliveriesForceLoad],
  );

  return (
    <View style={tailwind('flex-1 bg-neutral-100')}>
      <Tracking deliveries={deliveries} onPressDelete={onPressDelete} />
    </View>
  );
}
