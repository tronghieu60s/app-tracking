import Modal from '@components/Base/Common/Modal';
import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import TrackingForm from '@components/Common/Tracking/TrackingForm';
import I18n from '@core/i18n';
import {insDelivery} from '@core/models';
import {APP_PUBLISHER_NAME} from '@env';
import {deliveriesForceLoadState} from '@reducers/deliveriesReducer';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {PlusCircle} from 'react-native-feather';
import {useSetRecoilState} from 'recoil';
import {useTailwind} from 'tailwind-rn/dist';

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

export function HSHeaderRight() {
  const tailwind = useTailwind();
  const [modalVisible, setModalVisible] = useState(false);
  const setDeliveriesForceLoad = useSetRecoilState(deliveriesForceLoadState);

  const [packageCode, setPackageCode] = useState('');
  const [packageDelivery, setPackageDelivery] = useState('');

  const onPress = useCallback(async () => {
    const insertDelivery = await insDelivery(packageDelivery, packageCode);
    if (insertDelivery) {
      setPackageCode('');
      setModalVisible(false);
      setDeliveriesForceLoad(Math.random());
    }
  }, [packageCode, packageDelivery, setDeliveriesForceLoad]);

  return (
    <View style={tailwind('flex-row justify-center items-center')}>
      <Ripple
        style={tailwind('rounded-full')}
        styleInside={tailwind('rounded-full p-1')}
        onPress={() => setModalVisible(true)}>
        <PlusCircle stroke="#000" fill="#fff" width={18} height={18} />
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
