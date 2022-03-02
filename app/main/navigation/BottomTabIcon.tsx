import {OpenSansText} from '@components/Base/StyledText';
import {tabBarBottom} from '@const/tabBar';
import {BottomTabParamList} from '@const/types';
import {Route} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import * as Icons from 'react-native-feather';
import {useTailwind} from 'tailwind-rn';

type Props = {
  route: Route<keyof BottomTabParamList, undefined>;
  focused: boolean;
};

export default function BottomTabIcon(props: Props): JSX.Element {
  const {route, focused} = props;
  const tailwind = useTailwind();

  const tabBar = tabBarBottom[route.name];
  const tabBarColor = focused ? '#000' : '#737373';

  // @ts-ignore
  const Icon = Icons[tabBar.icon];

  return (
    <View style={tailwind('bg-transparent items-center justify-center mt-0.5')}>
      <Icon stroke={tabBarColor} fill="#fff" width={18} height={18} />
      <OpenSansText
        style={[
          tailwind('font-semibold mt-0.5'),
          {fontSize: 13, color: tabBarColor},
        ]}>
        {tabBar.name}
      </OpenSansText>
    </View>
  );
}
