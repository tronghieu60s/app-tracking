import Modal from '@components/Base/Common/Modal';
import Tracking from '@components/Common/Tracking';
import TrackingForm from '@components/Common/Tracking/TrackingForm';
import TrackingListEmpty from '@components/Common/Tracking/TrackingListEmpty';
import {
  DeliveryTypeExample,
  TabOneParamList,
  UserDeliveryType,
} from '@const/types';
import {toast} from '@core/commonFuncs';
import {loadNewDataDBTable} from '@core/db/data';
import {
  delDeliveryById,
  insDelivery,
  slDeliveryByCode,
  slDeliveryById,
  udDeliveryById,
} from '@core/models';
import {useNetInfo} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {requestTrackingOpenModalAddState} from '@reducers/commonReducer';
import {
  deliveriesForceLoadState,
  deliveriesState,
} from '@reducers/deliveriesReducer';
import I18n from 'i18n-js';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import RNRestart from 'react-native-restart';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {useTailwind} from 'tailwind-rn';

const exDeliveries: DeliveryTypeExample[] = require('@assets/resources/ex_deliveries.json');

export default function HSTracking() {
  const netInfo = useNetInfo();
  const tailwind = useTailwind();
  const navigation =
    useNavigation<NativeStackNavigationProp<TabOneParamList, 'TabOneScreen'>>();

  const [packageCode, setPackageCode] = useState('');
  const [packageDelivery, setPackageDelivery] = useState('');
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);

  const deliveries = useRecoilValue(deliveriesState);
  const [deliverySelected, setDeliverySelected] = useState(deliveries?.[0]);
  const setDeliveriesForceLoad = useSetRecoilState(deliveriesForceLoadState);
  const requestTrackingOpenModalAdd = useRecoilValue(
    requestTrackingOpenModalAddState,
  );

  useEffect(() => {
    if (requestTrackingOpenModalAdd) {
      setModalAddVisible(true);
    }
  }, [requestTrackingOpenModalAdd]);

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
    setModalEditVisible(true);
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
      setModalEditVisible(false);
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

  const onPressAdd = useCallback(() => {
    setModalAddVisible(true);
  }, []);

  const onHandleAdd = useCallback(async () => {
    /* Debug Reset */
    if (packageCode === 'DEBUG_LOAD_DATA') {
      loadNewDataDBTable();
      return RNRestart.Restart();
    }

    /* Debug Deliveries */
    if (packageCode === 'DEBUG_LOAD_DELIVERIES') {
      for (let index = 0; index < exDeliveries.length; index += 1) {
        const {id_delivery, code_delivery} = exDeliveries[index];
        await insDelivery(id_delivery, code_delivery || '');
      }
      setPackageCode('');
      setModalAddVisible(false);
      return setDeliveriesForceLoad(Math.random());
    }

    const insertDelivery = await insDelivery(packageDelivery, packageCode);
    if (insertDelivery.rowsAffected > 0) {
      setPackageCode('');
      setModalAddVisible(false);
      setDeliveriesForceLoad(Math.random());

      const delivery = await slDeliveryById(String(insertDelivery.insertId));
      navigation.navigate('HSTrackingDetail', {delivery});
    }
  }, [navigation, packageCode, packageDelivery, setDeliveriesForceLoad]);

  const onPressHandleAdd = useCallback(async () => {
    if (packageCode.length === 0) {
      return toast(I18n.t('app.tracking.packageCode.required'));
    }

    if (!(await slDeliveryByCode(packageCode))) {
      return onHandleAdd();
    }

    Alert.alert(
      I18n.t('app.tracking.alert'),
      I18n.t('app.tracking.packageCode.exists'),
      [
        {text: 'OK', onPress: () => onHandleAdd()},
        {text: 'Cancel', onPress: () => setPackageCode(''), style: 'cancel'},
      ],
    );
  }, [onHandleAdd, packageCode]);

  return (
    <View style={tailwind('flex-1 bg-neutral-100')}>
      {deliveries.length === 0 && <TrackingListEmpty onPress={onPressAdd} />}
      <Tracking
        deliveries={deliveries}
        deliverySelected={deliverySelected}
        setDeliverySelected={setDeliverySelected}
        onPressItem={onPressItem}
        onPressEdit={onPressEdit}
        onPressHandleEdit={onPressHandleEdit}
        onPressDelete={onPressDelete}
        modalVisible={modalEditVisible}
        setModalVisible={setModalEditVisible}
      />
      <Modal
        modalVisible={modalAddVisible}
        setModalVisible={setModalAddVisible}>
        <View style={tailwind('w-11/12 bg-white rounded-md px-6 py-8')}>
          <TrackingForm
            packageCode={packageCode}
            setPackageCode={setPackageCode}
            packageDelivery={packageDelivery}
            setPackageDelivery={setPackageDelivery}
            onPress={onPressHandleAdd}
          />
        </View>
      </Modal>
    </View>
  );
}
