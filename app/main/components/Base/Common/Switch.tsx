import React from 'react';
import {Switch as DefaultSwitch} from 'react-native';

export default function Switch(props: DefaultSwitch['props']) {
  const {value, ...otherProps} = props;
  return (
    <DefaultSwitch
      value={value}
      trackColor={{false: '#767577', true: '#5e72e480'}}
      thumbColor={value ? '#5e72e4' : '#fff'}
      ios_backgroundColor="#3e3e3e"
      {...otherProps}
    />
  );
}
