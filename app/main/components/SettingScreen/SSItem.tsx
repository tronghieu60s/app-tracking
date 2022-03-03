import {OpenSansText} from '@components/Base/StyledText';
import React from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

type Props = {title: string; children: React.ReactNode};

export default function SSItem(props: Props) {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('bg-white rounded-lg p-3 mx-1 my-1')}>
      <OpenSansText style={tailwind('capitalize text-blue-800 font-bold mb-2')}>
        {props.title}
      </OpenSansText>
      <View style={tailwind('px-2')}>{props.children}</View>
    </View>
  );
}
