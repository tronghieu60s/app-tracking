import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import {DeliveryType} from '@const/types';
import {slDeliveries} from '@core/models';
import {APP_PUBLISHER_EMAIL} from '@env';
import {Picker} from '@react-native-picker/picker';
import I18n from 'i18n-js';
import React, {useCallback, useEffect, useState} from 'react';
import {Linking, TextInput, View} from 'react-native';
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
            enabled={delivery.active_delivery === 1}
          />
        );
      }),
    [deliveries],
  );

  return (
    <View>
      <View style={tailwind('px-2')}>
        <View>
          <OpenSansText>{I18n.t('app.tracking.codeInput.label')}:</OpenSansText>
          <TextInput
            value={props.packageCode}
            onChangeText={props.setPackageCode}
            placeholder={I18n.t('app.tracking.codeInput.placeholder')}
            style={tailwind(
              'border border-slate-700 rounded-md px-3 h-11 mt-2',
            )}
          />
        </View>
        <View style={tailwind('mt-4')}>
          <OpenSansText>
            {I18n.t('app.tracking.shippingInput.label')}:
          </OpenSansText>
          <View
            style={tailwind('border border-slate-700 rounded-md h-12 mt-2')}>
            <Picker
              selectedValue={props.packageDelivery}
              onValueChange={itemValue => props.setPackageDelivery(itemValue)}
              style={{
                transform: [{scaleX: 0.9}, {scaleY: 0.9}, {translateY: -5}],
              }}>
              {renderPickerItems()}
            </Picker>
          </View>
        </View>
      </View>
      <View style={tailwind('mt-5')}>
        <Ripple
          style={tailwind('w-full rounded-md')}
          styleInside={tailwind('rounded-md bg-blue-800 p-2.5')}
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
