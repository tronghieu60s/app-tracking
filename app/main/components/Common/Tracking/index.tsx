import React from 'react';
import {View} from 'react-native';
import TrackingForm from './TrackingForm';

type Props = {
  packageCode: string;
  setPackageCode: (packageCode: string) => void;
  packageDelivery: string;
  setPackageDelivery: (packageDelivery: string) => void;
};

export default function Tracking(props: Props) {
  return (
    <View>
      <TrackingForm
        packageCode={props.packageCode}
        setPackageCode={props.setPackageCode}
        packageDelivery={props.packageDelivery}
        setPackageDelivery={props.setPackageDelivery}
      />
    </View>
  );
}
