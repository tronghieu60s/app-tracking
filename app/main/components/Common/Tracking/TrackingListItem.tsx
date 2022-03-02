import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import {UserDeliveryType} from '@const/types';
import React from 'react';
import {View} from 'react-native';
import {Activity, Clock, Edit, Trash} from 'react-native-feather';
import {useTailwind} from 'tailwind-rn';

type Props = {
  delivery: UserDeliveryType;
  onPressDelete: () => void;
};

export default function TrackingListItem(props: Props) {
  const tailwind = useTailwind();

  return (
    <Ripple
      style={tailwind('rounded-lg bg-white mb-2')}
      styleInside={tailwind('rounded-lg p-4 pb-5')}>
      <View style={tailwind('flex-row justify-between items-center')}>
        <View style={tailwind('w-8/12')}>
          <OpenSansText
            style={tailwind(
              'text-slate-900 text-base font-semibold underline',
            )}>
            {props.delivery.title_delivery}
          </OpenSansText>
          <View style={tailwind('flex-row items-center mt-1.5')}>
            <Activity
              stroke="#000"
              fill="#fff"
              width={13}
              height={13}
              style={tailwind('mr-2')}
            />
            <OpenSansText style={tailwind('text-slate-900 text-xs')}>
              {props.delivery.code_delivery} | {props.delivery.name_delivery}
            </OpenSansText>
          </View>
          <View style={tailwind('flex-row items-center mt-1.5')}>
            <Clock
              stroke="#000"
              fill="#fff"
              width={13}
              height={13}
              style={tailwind('mr-2')}
            />
            <OpenSansText style={tailwind('text-slate-900 text-xs')}>
              20.12.01, 21:00
            </OpenSansText>
          </View>
        </View>
        <View style={tailwind('w-4/12 flex-row justify-end')}>
          <Ripple
            style={tailwind('rounded-full mr-2')}
            styleInside={tailwind('rounded-full p-1')}>
            <Edit stroke="#000" fill="#fff" width={16} height={16} />
          </Ripple>
          <Ripple
            style={tailwind('rounded-full')}
            styleInside={tailwind('rounded-full p-1')}
            onPress={props.onPressDelete}>
            <Trash stroke="#000" fill="#fff" width={16} height={16} />
          </Ripple>
        </View>
      </View>
    </Ripple>
  );
}
