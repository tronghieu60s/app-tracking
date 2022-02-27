import {Picker} from '@react-native-picker/picker';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Text, TextInput, TouchableNativeFeedback, View} from 'react-native';
import {Package, Truck} from 'react-native-feather';
import KeepAwake from 'react-native-keep-awake';
import {TailwindProvider, useTailwind} from 'tailwind-rn';
import utilities from './tailwind.json';

function HomeScreen() {
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
      <View style={tailwind('flex flex-row items-center mt-5')}>
        <Package
          stroke="#000"
          fill="#fff"
          width={30}
          height={30}
          style={tailwind('mr-3')}
        />
        <TextInput
          value={packageCode}
          onChangeText={setPackageCode}
          placeholder="Mã vận đơn"
          style={tailwind(
            'flex-1 border border-slate-500 rounded-md px-3 py-2',
          )}
        />
      </View>
      <View style={tailwind('flex flex-row items-center mt-5')}>
        <Truck
          stroke="#000"
          fill="#fff"
          width={30}
          height={30}
          style={tailwind('mr-3')}
        />
        <View style={tailwind('flex-1 border border-slate-500 rounded-md')}>
          <Picker
            selectedValue={packageDelivery}
            onValueChange={itemValue => setPackageDelivery(itemValue)}
            style={{
              transform: [{scaleX: 0.9}, {scaleY: 0.9}, {translateX: -15}],
            }}>
            <Picker.Item label="J&T Express" value="jt" />
            <Picker.Item label="Giao Hàng Nhanh" value="ghn" />
            <Picker.Item label="VN Post" value="vp" />
          </Picker>
        </View>
      </View>
      <View style={tailwind('mt-5')}>
        <View style={tailwind('rounded-md overflow-hidden')}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#000', false)}>
            <View style={tailwind('bg-blue-600 rounded-md py-3')}>
              <Text style={tailwind('text-sm text-white self-center')}>
                Tra cứu đơn hàng
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <KeepAwake />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
