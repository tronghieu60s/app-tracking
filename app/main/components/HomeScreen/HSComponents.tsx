import React from 'react';
import I18n from '@core/i18n';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {APP_PUBLISHER_NAME} from '@env';
import {PlusCircle} from 'react-native-feather';

/* HSHeader -------------------
 * ----------------------------
 * ----------------------------
 */

export function HSHeaderLeft() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('bg-transparent')}>
      <Text
        style={tailwind(
          'text-blue-800 uppercase text-base font-bold tracking-wider',
        )}>
        {APP_PUBLISHER_NAME}
      </Text>
      <Text style={tailwind('uppercase text-xs font-bold tracking-wider')}>
        {I18n.t('app.header.application')}
      </Text>
    </View>
  );
}

export function HSHeaderRight() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex-row justify-center items-center')}>
      <View style={tailwind('rounded-full overflow-hidden')}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#000', false)}>
          <View style={tailwind('rounded-full p-1')}>
            <PlusCircle stroke="#000" fill="#fff" width={18} height={18} />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}
