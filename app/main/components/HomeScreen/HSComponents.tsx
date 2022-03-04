import Modal from '@components/Base/Common/Modal';
import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import TrackingForm from '@components/Common/Tracking/TrackingForm';
import {DeliveryTypeExample, TabOneParamList} from '@const/types';
import {capitalizeFirstLetter, toast} from '@core/commonFuncs';
import {loadNewDataDBTable} from '@core/db/data';
import I18n from '@core/i18n';
import {insDelivery, slDeliveryByCode, slDeliveryById} from '@core/models';
import {APP_PUBLISHER_NAME} from '@env';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  logTrackingState,
  requestTrackingReloadState,
} from '@reducers/commonReducer';
import {deliveriesForceLoadState} from '@reducers/deliveriesReducer';
import React, {useCallback, useState} from 'react';
import {Alert, View} from 'react-native';
import {Clipboard, PlusCircle, RotateCcw, XOctagon} from 'react-native-feather';
import RNRestart from 'react-native-restart';
import {useSetRecoilState} from 'recoil';
import {useTailwind} from 'tailwind-rn';
import RNClipboard from '@react-native-community/clipboard';

const deliveries: DeliveryTypeExample[] = require('@assets/resources/ex_deliveries.json');

/* HSHeader -------------------
 * ----------------------------
 * ----------------------------
 */

export function HSHeaderLeft() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('bg-transparent')}>
      <OpenSansText
        style={tailwind(
          'text-blue-800 uppercase text-base font-bold tracking-wider',
        )}>
        {APP_PUBLISHER_NAME}
      </OpenSansText>
      <OpenSansText
        style={tailwind(
          'text-black uppercase text-xs font-bold tracking-wider',
        )}>
        {I18n.t('app.header.application')}
      </OpenSansText>
    </View>
  );
}

export function HSHeaderRight({
  navigation,
}: {
  navigation: NativeStackNavigationProp<TabOneParamList, 'HSTrackingDetail'>;
}) {
  const tailwind = useTailwind();
  const [modalVisible, setModalVisible] = useState(false);

  const setDeliveriesForceLoad = useSetRecoilState(deliveriesForceLoadState);

  const [packageCode, setPackageCode] = useState('');
  const [packageDelivery, setPackageDelivery] = useState('');

  const handleSubmit = useCallback(async () => {
    /* Debug Reset */
    if (packageCode === 'DEBUG_LOAD_DATA') {
      loadNewDataDBTable();
      return RNRestart.Restart();
    }

    /* Debug Deliveries */
    if (packageCode === 'DEBUG_LOAD_DELIVERIES') {
      for (let index = 0; index < deliveries.length; index += 1) {
        const {id_delivery, code_delivery} = deliveries[index];
        await insDelivery(id_delivery, code_delivery || '');
      }
      setPackageCode('');
      setModalVisible(false);
      return setDeliveriesForceLoad(Math.random());
    }

    const insertDelivery = await insDelivery(packageDelivery, packageCode);
    if (insertDelivery.rowsAffected > 0) {
      setPackageCode('');
      setModalVisible(false);
      setDeliveriesForceLoad(Math.random());

      const delivery = await slDeliveryById(String(insertDelivery.insertId));
      navigation.navigate('HSTrackingDetail', {delivery});
    }
  }, [navigation, packageCode, packageDelivery, setDeliveriesForceLoad]);

  const onPress = useCallback(async () => {
    if (packageCode.length === 0) {
      return toast(I18n.t('app.tracking.packageCode.required'));
    }

    if (!(await slDeliveryByCode(packageCode))) {
      return handleSubmit();
    }

    Alert.alert(
      I18n.t('app.tracking.alert'),
      I18n.t('app.tracking.packageCode.exists'),
      [
        {text: 'OK', onPress: () => handleSubmit()},
        {text: 'Cancel', onPress: () => setPackageCode(''), style: 'cancel'},
      ],
    );
  }, [handleSubmit, packageCode]);

  return (
    <View style={tailwind('flex-row justify-center items-center')}>
      <Ripple
        style={tailwind('rounded-full')}
        styleInside={tailwind('rounded-full p-1')}
        onPress={() => setModalVisible(true)}>
        <PlusCircle stroke="#000" width={18} height={18} />
      </Ripple>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View style={tailwind('w-11/12 bg-white rounded-md px-6 py-8')}>
          <TrackingForm
            packageCode={packageCode}
            setPackageCode={setPackageCode}
            packageDelivery={packageDelivery}
            setPackageDelivery={setPackageDelivery}
            onPress={onPress}
          />
        </View>
      </Modal>
    </View>
  );
}

/* HSHeaderTrackingDetail -----
 * ----------------------------
 * ----------------------------
 */

export function HSHeaderTrackingDetailLeft({
  route,
}: {
  route: RouteProp<TabOneParamList, 'HSTrackingDetail'>;
}) {
  const tailwind = useTailwind();
  const {delivery} = route.params;

  return (
    <View style={tailwind('w-full bg-transparent')}>
      <OpenSansText
        numberOfLines={1}
        style={tailwind('text-blue-800 text-sm font-bold tracking-wider')}>
        {capitalizeFirstLetter(delivery?.title_delivery)}
      </OpenSansText>
      <OpenSansText numberOfLines={1} style={tailwind('w-8/12 text-xs')}>
        {delivery?.code_delivery} | {delivery?.name_delivery}
      </OpenSansText>
    </View>
  );
}

export function HSHeaderTrackingDetailRight({
  route,
}: {
  route: RouteProp<TabOneParamList, 'HSTrackingDetail'>;
}) {
  const tailwind = useTailwind();
  const {delivery} = route.params;
  const setRequestTrackingReload = useSetRecoilState(
    requestTrackingReloadState,
  );

  const onPressClipboard = useCallback(async () => {
    RNClipboard.setString(delivery.code_delivery || '');
    toast(I18n.t('app.tracking.toast.copiedClipboard'));
  }, [delivery.code_delivery]);

  return (
    <View style={tailwind('flex-row')}>
      <Ripple
        style={tailwind('rounded-full')}
        styleInside={tailwind('rounded-full p-1')}
        onPress={() => setRequestTrackingReload(Math.random())}>
        <RotateCcw stroke="#000" width={18} height={18} />
      </Ripple>
      <Ripple
        style={tailwind('rounded-full ml-2')}
        styleInside={tailwind('rounded-full p-1')}
        onPress={onPressClipboard}>
        <Clipboard stroke="#000" width={18} height={18} />
      </Ripple>
    </View>
  );
}

/* HSHeaderTrackingDetailLog --
 * ----------------------------
 * ----------------------------
 */

export function HSHeaderTrackingDetailLogRight({
  navigation,
}: {
  navigation: NativeStackNavigationProp<TabOneParamList, 'HSTrackingDetail'>;
}) {
  const tailwind = useTailwind();
  const setLogTracking = useSetRecoilState(logTrackingState);

  return (
    <Ripple
      style={tailwind('rounded-full')}
      styleInside={tailwind('rounded-full p-1')}
      onPress={() => {
        setLogTracking('');
        navigation.goBack();
      }}>
      <XOctagon stroke="#000" width={18} height={18} />
    </Ripple>
  );
}
