import {UserDeliveryType} from '@const/types';
import React from 'react';
import TrackingList from './TrackingList';

type Props = {
  deliveries: UserDeliveryType[];
  deliverySelected: UserDeliveryType;
  setDeliverySelected: (deliverySelected: UserDeliveryType) => void;
  onPressItem: (delivery: UserDeliveryType) => void;
  onPressEdit: (delivery: UserDeliveryType) => void;
  onPressHandleEdit: () => void;
  onPressDelete: (delivery: UserDeliveryType) => void;
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

export default function Tracking(props: Props) {
  return <TrackingList {...props} />;
}
