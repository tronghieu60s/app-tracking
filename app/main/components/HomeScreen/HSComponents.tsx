import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import I18n from '@core/i18n';
import {APP_PUBLISHER_NAME} from '@env';
import React from 'react';
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
  return (
    <View style={tailwind('flex-row justify-center items-center')}>
      <Ripple
        style={tailwind('rounded-full')}
        styleInside={tailwind('rounded-full p-1')}>
        <PlusCircle stroke="#000" fill="#fff" width={18} height={18} />
      </Ripple>
    </View>
  );
}
