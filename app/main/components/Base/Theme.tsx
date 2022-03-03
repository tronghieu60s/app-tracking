import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

export type RippleProps = View['props'] & {
  styleInside?: StyleProp<ViewStyle>;
  rippleColor?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export function Ripple(props: RippleProps) {
  const tailwind = useTailwind();
  const {
    style,
    styleInside,
    rippleColor = 'rgb(163, 163, 163)',
    onPress,
    children,
    ...otherProps
  } = props;

  return (
    <View style={[tailwind('overflow-hidden'), style]} {...otherProps}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(rippleColor, false)}
        onPress={onPress}>
        <View style={styleInside}>{children}</View>
      </TouchableNativeFeedback>
    </View>
  );
}
