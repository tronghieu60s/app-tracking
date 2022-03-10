import {OpenSansText} from '@components/Base/StyledText';
import I18n from '@core/i18n';
import * as React from 'react';
import {View} from 'react-native';
import {AlertCircle} from 'react-native-feather';
import {useTailwind} from 'tailwind-rn/dist';

type Props = {
  style?: View['props']['style'];
  children?: React.ReactNode | React.ReactNode[];
};

export default function EmptyScreen(props: Props) {
  const tailwind = useTailwind();
  return (
    <View
      style={[
        tailwind('bg-neutral-100 h-full justify-center items-center px-5'),
      ]}>
      <AlertCircle
        stroke="#000"
        width={30}
        height={30}
        style={tailwind('mb-3')}
      />
      <View style={props.style}>
        {props.children || (
          <OpenSansText style={tailwind('w-7/12 text-center text-base')}>
            {I18n.t('app.common.emptyData')}
          </OpenSansText>
        )}
      </View>
    </View>
  );
}
