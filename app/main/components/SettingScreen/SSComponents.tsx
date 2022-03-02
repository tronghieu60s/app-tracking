import Switch from '@components/Base/Common/Switch';
import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import React from 'react';
import {View} from 'react-native';
import {ChevronRight} from 'react-native-feather';
import {useTailwind} from 'tailwind-rn/dist';

/* SSComponent ----------------
 * ----------------------------
 * ----------------------------
 */

export function SSItemSelect(props: {
  title: string;
  description?: string;
  onPress?: () => void;
}) {
  const tailwind = useTailwind();
  return (
    <Ripple style={tailwind('w-full flex-auto')} onPress={props.onPress}>
      <View style={tailwind('bg-transparent py-2')}>
        <OpenSansText style={[tailwind('font-bold'), {fontSize: 13}]}>
          {props.title}
        </OpenSansText>
        {props.description && (
          <OpenSansText
            style={[tailwind('text-gray-500 mt-0.5'), {fontSize: 13}]}>
            {props.description}
          </OpenSansText>
        )}
      </View>
    </Ripple>
  );
}

export function SSItemSwitch(props: {
  title: string;
  description?: string;
  value: boolean;
  onPress: () => void;
}) {
  const tailwind = useTailwind();
  return (
    <Ripple style={tailwind('w-full flex-auto')} onPress={props.onPress}>
      <View
        style={tailwind(
          'bg-transparent flex-row justify-between items-center py-2',
        )}>
        <View style={tailwind('bg-transparent')}>
          <OpenSansText style={[tailwind('font-bold'), {fontSize: 13}]}>
            {props.title}
          </OpenSansText>
          {props.description && (
            <OpenSansText
              style={[tailwind('text-gray-500 mt-0.5'), {fontSize: 13}]}>
              {props.description}
            </OpenSansText>
          )}
        </View>
        <Switch value={props.value} onValueChange={props.onPress} />
      </View>
    </Ripple>
  );
}

export function SSItemSelectTab(props: {
  title: string;
  smallText?: string;
  onPress: () => void;
}) {
  const tailwind = useTailwind();
  return (
    <Ripple onPress={props.onPress}>
      <View
        style={tailwind(
          'bg-transparent flex-row justify-between items-center py-3',
        )}>
        <OpenSansText style={tailwind('font-bold')}>{props.title}</OpenSansText>
        <View style={tailwind('bg-transparent flex-row items-center')}>
          <OpenSansText
            style={[
              tailwind('text-gray-500 font-semibold mr-2'),
              {fontSize: 13},
            ]}>
            {props.smallText}
          </OpenSansText>
          <ChevronRight stroke="#000" width={18} height={18} />
        </View>
      </View>
    </Ripple>
  );
}
