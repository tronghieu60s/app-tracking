import EmptyScreen from '@components/Base/Screens/EmptyScreen';
import Tracking from '@components/Common/Tracking';
import {TabOneParamList, UserDeliveryType} from '@const/types';
import {toast} from '@core/commonFuncs';
import {delDeliveryById, udDeliveryById} from '@core/models';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  deliveriesForceLoadState,
  deliveriesState,
} from '@reducers/deliveriesReducer';
import I18n from 'i18n-js';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {useTailwind} from 'tailwind-rn';
import {useNetInfo} from '@react-native-community/netinfo';

export default function HSTracking() {
  const netInfo = useNetInfo();
  const tailwind = useTailwind();
  const navigation =
    useNavigation<NativeStackNavigationProp<TabOneParamList, 'TabOneScreen'>>();
  const [modalVisible, setModalVisible] = useState(false);

  const deliveries = useRecoilValue(deliveriesState);
  const setDeliveriesForceLoad = useSetRecoilState(deliveriesForceLoadState);
  const [deliverySelected, setDeliverySelected] = useState(deliveries?.[0]);

  const onPressItem = useCallback(
    (delivery: UserDeliveryType) => {
      if (netInfo.isConnected) {
        return navigation.navigate('HSTrackingDetail', {delivery});
      }
      toast(I18n.t('app.tracking.toast.noInternet'));
    },
    [navigation, netInfo.isConnected],
  );

  const onPressEdit = useCallback((delivery: UserDeliveryType) => {
    setModalVisible(true);
    setDeliverySelected(delivery);
  }, []);

  const onPressHandleEdit = useCallback(async () => {
    const {title_delivery = ''} = deliverySelected;

    if (title_delivery.length === 0) {
      return toast(I18n.t('app.tracking.packageName.required'));
    }

    const updateDelivery = await udDeliveryById(
      {title_delivery},
      deliverySelected.id_tracking,
    );
    if (updateDelivery) {
      setModalVisible(false);
      setDeliveriesForceLoad(Math.random());
    }
  }, [deliverySelected, setDeliveriesForceLoad]);

  const onPressDelete = useCallback(
    async (delivery: UserDeliveryType) => {
      const deleteDelivery = await delDeliveryById(delivery.id_tracking);
      if (deleteDelivery) {
        setDeliveriesForceLoad(Math.random());
      }
    },
    [setDeliveriesForceLoad],
  );

  if (deliveries.length === 0) {
    return <EmptyScreen />;
  }

  return (
    <View style={tailwind('flex-1 bg-neutral-100')}>
      <Tracking
        deliveries={deliveries}
        deliverySelected={deliverySelected}
        setDeliverySelected={setDeliverySelected}
        onPressItem={onPressItem}
        onPressEdit={onPressEdit}
        onPressHandleEdit={onPressHandleEdit}
        onPressDelete={onPressDelete}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
