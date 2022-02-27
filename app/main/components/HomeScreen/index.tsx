import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import HSTrackingForm from './HSTrackingForm';
import HSTrackingList from './HSTrackingList';

export default function HomeScreen() {
  const tailwind = useTailwind();
  const [packageCode, setPackageCode] = useState('');
  const [packageDelivery, setPackageDelivery] = useState('');

  return (
    <View style={tailwind('flex-1 bg-white px-4')}>
      <Text
        style={tailwind(
          'text-center text-2xl text-slate-800 font-bold underline mt-5',
        )}>
        Tra cứu mã vận đơn của bạn!
      </Text>
      <HSTrackingForm
        packageCode={packageCode}
        setPackageCode={setPackageCode}
        packageDelivery={packageDelivery}
        setPackageDelivery={setPackageDelivery}
      />
      <HSTrackingList />
    </View>
  );
}
