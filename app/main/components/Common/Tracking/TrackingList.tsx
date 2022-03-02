import {UserDeliveryType} from '@const/types';
import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import TrackingListItem from './TrackingListItem';

type Props = {
  deliveries: UserDeliveryType[];
  onPressDelete: (delivery: UserDeliveryType) => void;
};

export default function TrackingList(props: Props) {
  const tailwind = useTailwind();

  // ---- Render
  const renderItem = useCallback(
    ({item}) => (
      <TrackingListItem
        delivery={item}
        onPressDelete={() => props.onPressDelete(item)}
      />
    ),
    [props],
  );

  return (
    <FlatList
      data={props.deliveries}
      renderItem={renderItem}
      contentContainerStyle={tailwind('p-2')}
    />
  );
}
