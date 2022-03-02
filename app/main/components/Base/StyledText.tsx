import {OpenSansFont} from '@const/fonts';
import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as DefaultText,
  TextStyle,
} from 'react-native';

const disableStyles: StyleProp<TextStyle> = {
  fontStyle: 'normal',
  fontWeight: 'normal',
};

export function OpenSansText(props: DefaultText['props']) {
  const {fontWeight = '400', fontStyle} = StyleSheet.flatten(props.style || {});

  // styles custom for Open Sans
  const fontFamily = `opensans_${OpenSansFont[fontWeight]}${
    fontStyle === 'italic' ? '_italic' : ''
  }`;

  return (
    <DefaultText
      {...props}
      style={[{color: '#000'}, props.style, {fontFamily}, disableStyles]}
    />
  );
}
