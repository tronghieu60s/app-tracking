import EmptyScreen from '@components/Base/Screens/EmptyScreen';
import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import I18n from 'i18n-js';
import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';

type Props = {
  onPress: () => void;
};

export default function TrackingListEmpty(props: Props) {
  const tailwind = useTailwind();
  return (
    <EmptyScreen style={tailwind('w-8/12 justify-center items-center')}>
      <OpenSansText style={tailwind('text-center text-base mb-3')}>
        {I18n.t('app.tracking.package.noData')}
      </OpenSansText>
      <Ripple
        style={tailwind('w-full rounded-md')}
        styleInside={tailwind('rounded-md bg-blue-800 p-2.5')}
        onPress={props.onPress}>
        <OpenSansText
          style={tailwind('capitalize text-sm text-white self-center')}>
          {I18n.t('app.tracking.package.noData.button')}
        </OpenSansText>
      </Ripple>
    </EmptyScreen>
  );
}
