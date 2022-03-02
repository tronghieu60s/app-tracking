import {OpenSansText} from '@components/Base/StyledText';
import {tabBarHeader} from '@const/tabBar';
import React from 'react';
import {useTailwind} from 'tailwind-rn';

type Props = {children: string};

export default function HeaderTitle(props: Props) {
  const tailwind = useTailwind();
  return (
    <OpenSansText style={tailwind('text-lg font-semibold')}>
      {tabBarHeader?.[props?.children as keyof typeof tabBarHeader]?.name}
    </OpenSansText>
  );
}
