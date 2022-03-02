import {DeliveryType} from '@const/types';
import React from 'react';
import TrackingList from './TrackingList';

type Props = {deliveries: DeliveryType[]};

export default function Tracking(props: Props) {
  return <TrackingList {...props} />;
}
