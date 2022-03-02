import React from 'react';
import {
  StyleProp,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

export type RippleProps = View['props'] & {
  rippleColor?: string;
  styleInside?: StyleProp<ViewStyle>;
};

export function Ripple(props: RippleProps) {
  const tailwind = useTailwind();
  const {
    style,
    styleInside,
    rippleColor = '#64748B',
    children,
    ...otherProps
  } = props;

  return (
    <View style={[tailwind('overflow-hidden'), style]} {...otherProps}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(rippleColor, false)}>
        <View style={styleInside}>{children}</View>
      </TouchableNativeFeedback>
    </View>
  );
}
