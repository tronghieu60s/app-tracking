import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import {Picker} from '@react-native-picker/picker';
import {deliveriesState} from '@reducers/commonReducer';
import React, {useCallback} from 'react';
import {TextInput, View} from 'react-native';
import {Package, Truck} from 'react-native-feather';
import {useRecoilValue} from 'recoil';
import {useTailwind} from 'tailwind-rn/dist';

type Props = {
  packageCode: string;
  setPackageCode: (packageCode: string) => void;
  packageDelivery: string;
  setPackageDelivery: (packageDelivery: string) => void;
};

export default function TrackingForm(props: Props) {
  const tailwind = useTailwind();
  const deliveries = useRecoilValue(deliveriesState);

  const renderItems = useCallback(
    () =>
      deliveries.map(delivery => {
        return (
          <Picker.Item
            key={delivery.id_delivery}
            label={delivery.name_delivery}
            value={delivery.code_delivery}
          />
        );
      }),
    [deliveries],
  );

  return (
    <View>
      <View style={tailwind('flex flex-row items-center mt-5')}>
        <Package
          stroke="#000"
          fill="#fff"
          width={30}
          height={30}
          style={tailwind('mr-3')}
        />
        <TextInput
          value={props.packageCode}
          onChangeText={props.setPackageCode}
          placeholder="Mã vận đơn"
          style={tailwind(
            'flex-1 border border-slate-700 rounded-md px-3 py-2',
          )}
        />
      </View>
      <View style={tailwind('flex flex-row items-center mt-5')}>
        <Truck
          stroke="#000"
          fill="#fff"
          width={30}
          height={30}
          style={tailwind('mr-3')}
        />
        <View
          style={tailwind('flex-1 border border-slate-700 rounded-md h-12')}>
          <Picker
            selectedValue={props.packageDelivery}
            onValueChange={itemValue => props.setPackageDelivery(itemValue)}
            style={{
              transform: [{scaleX: 0.9}, {scaleY: 0.9}, {translateY: -5}],
            }}>
            {renderItems()}
          </Picker>
        </View>
      </View>
      <View style={tailwind('mt-5')}>
        <Ripple
          style={tailwind('rounded-md')}
          styleInside={tailwind('rounded-md bg-blue-600 py-3')}>
          <OpenSansText style={tailwind('text-sm text-white self-center')}>
            Tra cứu đơn hàng
          </OpenSansText>
        </Ripple>
      </View>
    </View>
  );
}
