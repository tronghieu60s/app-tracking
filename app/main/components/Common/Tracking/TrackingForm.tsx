import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import {DeliveryType} from '@const/types';
import {slDeliveries} from '@core/models';
import {APP_PUBLISHER_EMAIL} from '@env';
import {Picker} from '@react-native-picker/picker';
import I18n from 'i18n-js';
import React, {useCallback, useEffect, useState} from 'react';
import {Linking, TextInput, View} from 'react-native';
import {Activity, Package} from 'react-native-feather';
import {useTailwind} from 'tailwind-rn';

type Props = {
  packageCode: string;
  setPackageCode: (packageCode: string) => void;
  packageDelivery: string;
  setPackageDelivery: (packageDelivery: string) => void;
  onPress: () => void;
};

export default function TrackingForm(props: Props) {
  const tailwind = useTailwind();
  const [deliveries, setDeliveries] = useState<DeliveryType[]>([]);

  useEffect(() => {
    (async () => {
      const response = await slDeliveries();
      setDeliveries(response);
    })();
  }, []);

  const renderPickerItems = useCallback(
    () =>
      deliveries.map(delivery => {
        return (
          <Picker.Item
            key={delivery.id_delivery}
            label={delivery.name_delivery}
            value={delivery.id_delivery}
          />
        );
      }),
    [deliveries],
  );

  return (
    <View>
      <OpenSansText style={tailwind('capitalize text-base font-semibold')}>
        {I18n.t('app.tracking.title')}
      </OpenSansText>
      <View style={tailwind('flex flex-row items-center px-2 mt-6')}>
        <Package
          stroke="#000"
          fill="#fff"
          width={20}
          height={20}
          style={tailwind('mr-4')}
        />
        <TextInput
          value={props.packageCode}
          onChangeText={props.setPackageCode}
          placeholder={I18n.t('app.tracking.codeInput.placeholder')}
          style={tailwind(
            'flex-1 border border-slate-700 rounded-md px-3 h-11',
          )}
        />
      </View>
      <View style={tailwind('flex flex-row items-center px-2 mt-6')}>
        <Activity
          stroke="#000"
          fill="#fff"
          width={20}
          height={20}
          style={tailwind('mr-4')}
        />
        <View
          style={tailwind('flex-1 border border-slate-700 rounded-md h-11')}>
          <Picker
            selectedValue={props.packageDelivery}
            onValueChange={itemValue => props.setPackageDelivery(itemValue)}
            style={{
              transform: [
                {scaleX: 0.85},
                {scaleY: 0.85},
                {translateX: -10},
                {translateY: -7},
              ],
            }}>
            {renderPickerItems()}
          </Picker>
        </View>
      </View>
      <View style={tailwind('mt-6')}>
        <Ripple
          style={tailwind('w-full rounded-md')}
          styleInside={tailwind('rounded-md bg-blue-600 p-2')}
          onPress={props.onPress}>
          <OpenSansText
            style={tailwind('capitalize text-sm text-white self-center')}>
            {I18n.t('app.tracking.add.button.placeholder')}
          </OpenSansText>
        </Ripple>
        <OpenSansText style={tailwind('text-xs mt-4')}>
          {I18n.t('app.setting.interfaceTracking')}{' '}
          <OpenSansText
            style={tailwind('underline')}
            onPress={() => Linking.openURL(`mailto:${APP_PUBLISHER_EMAIL}`)}>
            {APP_PUBLISHER_EMAIL}
          </OpenSansText>
        </OpenSansText>
      </View>
    </View>
  );
}
