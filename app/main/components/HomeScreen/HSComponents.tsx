import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import {TabOneParamList} from '@const/types';
import {capitalizeFirstLetter, toast} from '@core/commonFuncs';
import I18n from '@core/i18n';
import {APP_PUBLISHER_NAME} from '@env';
import RNClipboard from '@react-native-community/clipboard';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  logTrackingState,
  requestTrackingOpenModalAddState,
  requestTrackingReloadState,
} from '@reducers/commonReducer';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import {Clipboard, PlusCircle, RotateCcw, XOctagon} from 'react-native-feather';
import {useSetRecoilState} from 'recoil';
import {useTailwind} from 'tailwind-rn';

/* HSHeader -------------------
 * ----------------------------
 * ----------------------------
 */

export function HSHeaderLeft() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('bg-transparent')}>
      <OpenSansText
        style={tailwind(
          'text-blue-800 uppercase text-base font-bold tracking-wider',
        )}>
        {APP_PUBLISHER_NAME}
      </OpenSansText>
      <OpenSansText
        style={tailwind(
          'text-black uppercase text-xs font-bold tracking-wider',
        )}>
        {I18n.t('app.header.application')}
      </OpenSansText>
    </View>
  );
}

export function HSHeaderRight() {
  const tailwind = useTailwind();
  const setRequestTrackingOpenModalAdd = useSetRecoilState(
    requestTrackingOpenModalAddState,
  );

  return (
    <View style={tailwind('flex-row justify-center items-center')}>
      <Ripple
        style={tailwind('rounded-full')}
        styleInside={tailwind('rounded-full p-1')}
        onPress={() => setRequestTrackingOpenModalAdd(Math.random())}>
        <PlusCircle stroke="#000" width={18} height={18} />
      </Ripple>
    </View>
  );
}

/* HSHeaderTrackingDetail -----
 * ----------------------------
 * ----------------------------
 */

export function HSHeaderTrackingDetailLeft({
  route,
}: {
  route: RouteProp<TabOneParamList, 'HSTrackingDetail'>;
}) {
  const tailwind = useTailwind();
  const {delivery} = route.params;

  return (
    <View style={tailwind('w-full bg-transparent')}>
      <OpenSansText
        numberOfLines={1}
        style={tailwind('text-blue-800 text-sm font-bold tracking-wider')}>
        {capitalizeFirstLetter(delivery?.title_delivery)}
      </OpenSansText>
      <OpenSansText numberOfLines={1} style={tailwind('w-8/12 text-xs')}>
        {delivery?.code_delivery} | {delivery?.name_delivery}
      </OpenSansText>
    </View>
  );
}

export function HSHeaderTrackingDetailRight({
  route,
}: {
  route: RouteProp<TabOneParamList, 'HSTrackingDetail'>;
}) {
  const tailwind = useTailwind();
  const {delivery} = route.params;
  const setRequestTrackingReload = useSetRecoilState(
    requestTrackingReloadState,
  );

  const onPressClipboard = useCallback(async () => {
    RNClipboard.setString(delivery.code_delivery || '');
    toast(I18n.t('app.tracking.toast.copiedClipboard'));
  }, [delivery.code_delivery]);

  return (
    <View style={tailwind('flex-row')}>
      <Ripple
        style={tailwind('rounded-full')}
        styleInside={tailwind('rounded-full p-1')}
        onPress={() => setRequestTrackingReload(Math.random())}>
        <RotateCcw stroke="#000" width={18} height={18} />
      </Ripple>
      <Ripple
        style={tailwind('rounded-full ml-2')}
        styleInside={tailwind('rounded-full p-1')}
        onPress={onPressClipboard}>
        <Clipboard stroke="#000" width={18} height={18} />
      </Ripple>
    </View>
  );
}

/* HSHeaderTrackingDetailLog --
 * ----------------------------
 * ----------------------------
 */

export function HSHeaderTrackingDetailLogRight({
  navigation,
}: {
  navigation: NativeStackNavigationProp<TabOneParamList, 'HSTrackingDetail'>;
}) {
  const tailwind = useTailwind();
  const setLogTracking = useSetRecoilState(logTrackingState);

  return (
    <Ripple
      style={tailwind('rounded-full')}
      styleInside={tailwind('rounded-full p-1')}
      onPress={() => {
        setLogTracking('');
        navigation.goBack();
      }}>
      <XOctagon stroke="#000" width={18} height={18} />
    </Ripple>
  );
}
