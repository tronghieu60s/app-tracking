import {DeliveryType} from '@const/types';
import React from 'react';
import {Text, View} from 'react-native';

type Props = {delivery: DeliveryType};

export default function TrackingListItem(props: Props) {
  const {delivery} = props;
  return (
    <View>
      <Text>{delivery.id_delivery}</Text>
    </View>
  );
}
