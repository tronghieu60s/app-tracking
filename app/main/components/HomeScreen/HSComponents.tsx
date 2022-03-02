import Modal from '@components/Base/Common/Modal';
import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import TrackingForm from '@components/Common/Tracking/TrackingForm';
import I18n from '@core/i18n';
import {APP_PUBLISHER_NAME} from '@env';
import React, {useState} from 'react';
import {View} from 'react-native';
import {PlusCircle} from 'react-native-feather';
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
          'text-slate-900 uppercase text-xs font-bold tracking-wider',
        )}>
        {I18n.t('app.header.application')}
      </OpenSansText>
    </View>
  );
}

export function HSHeaderRight() {
  const tailwind = useTailwind();
  const [modalVisible, setModalVisible] = useState(false);

  const [packageCode, setPackageCode] = useState('');
  const [packageDelivery, setPackageDelivery] = useState('');

  return (
    <View style={tailwind('flex-row justify-center items-center')}>
      <Ripple
        style={tailwind('rounded-full')}
        styleInside={tailwind('rounded-full p-1')}
        onPress={() => setModalVisible(true)}>
        <PlusCircle stroke="#000" fill="#fff" width={18} height={18} />
      </Ripple>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View style={tailwind('px-2 py-3 pb-7')}>
          <OpenSansText
            style={tailwind(
              'capitalize text-center text-xl text-slate-800 font-bold mb-5',
            )}>
            Tra cứu mã vận đơn
          </OpenSansText>
          <TrackingForm
            packageCode={packageCode}
            setPackageCode={setPackageCode}
            packageDelivery={packageDelivery}
            setPackageDelivery={setPackageDelivery}
            setModalVisible={setModalVisible}
          />
        </View>
      </Modal>
    </View>
  );
}
