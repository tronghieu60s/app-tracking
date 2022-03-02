import {RootStackParamList} from '@const/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function NotFoundScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'NotFound'>;
}) {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex-1 bg-white justify-center items-center p-5')}>
      <Text style={tailwind('text-xl font-bold')}>
        This screen doesn't exist.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Root')}
        style={tailwind('py-5')}>
        <Text style={tailwind('text-blue-400')}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
