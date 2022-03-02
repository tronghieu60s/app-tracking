import {DeliveryType} from '@const/types';
import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import TrackingListItem from './TrackingListItem';

type Props = {deliveries: DeliveryType[]};

export default function TrackingList(props: Props) {
  // ---- Render
  const renderItem = useCallback(
    ({item}) => <TrackingListItem delivery={item} />,
    [],
  );

  return <FlatList data={props.deliveries} renderItem={renderItem} />;
}
