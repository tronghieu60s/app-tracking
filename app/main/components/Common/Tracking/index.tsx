import {UserDeliveryType} from '@const/types';
import React from 'react';
import TrackingList from './TrackingList';

type Props = {
  deliveries: UserDeliveryType[];
  onPressDelete: (delivery: UserDeliveryType) => void;
};

export default function Tracking(props: Props) {
  return <TrackingList {...props} />;
}
