import {Ripple} from '@components/Base/Theme';
import {TabOneParamList} from '@const/types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  logTrackingState,
  requestTrackingReloadState,
} from '@reducers/commonReducer';
import I18n from 'i18n-js';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {Alert, View} from 'react-native';
import {AlertOctagon} from 'react-native-feather';
import {WebView} from 'react-native-webview';
import {useRecoilState, useRecoilValue} from 'recoil';
import {useTailwind} from 'tailwind-rn/dist';

export default function HSTrackingDetail() {
  const tailwind = useTailwind();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<TabOneParamList, 'HSTrackingDetail'>
    >();
  const {delivery} =
    useRoute<RouteProp<TabOneParamList, 'HSTrackingDetail'>>().params;

  const webViewRef = useRef<WebView | null>();
  const [logTracking, setLogTracking] = useRecoilState(logTrackingState);
  const requestTrackingReload = useRecoilValue(requestTrackingReloadState);

  useEffect(() => {
    if (delivery.captcha_delivery === 1) {
      Alert.alert(I18n.t('app.tracking.alert'), I18n.t('app.tracking.captcha'));
    }
  }, [delivery]);

  useEffect(() => {
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  }, [requestTrackingReload]);

  const webviewUrl = useMemo(() => {
    if (delivery.ajax_delivery === 1) {
      return `${delivery.url_delivery}`;
    }
    return `${delivery.url_delivery}${delivery.code_delivery}`;
  }, [delivery]);

  const onMessage = useCallback(
    (payload: any) => {
      let dataPayload;
      try {
        dataPayload = JSON.parse(payload.nativeEvent.data);
      } catch (e) {}

      if (dataPayload) {
        if (dataPayload.type === 'Console') {
          setLogTracking(
            logTracking + `\n[Console] ${JSON.stringify(dataPayload.data)}`,
          );
        } else {
          setLogTracking(logTracking + `\n${dataPayload}`);
        }
      }
    },
    [logTracking, setLogTracking],
  );

  const scripts = `(function() {
    const consoleLog = (type, log) => window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Console', 'data': {'type': type, 'log': log}}));
    console = {
      log: (log) => consoleLog('log', log),
      debug: (log) => consoleLog('debug', log),
      info: (log) => consoleLog('info', log),
      warn: (log) => consoleLog('warn', log),
      error: (log) => consoleLog('error', log),
    };
  })();`;

  return (
    <View style={tailwind('flex-1')}>
      <WebView
        ref={ref => (webViewRef.current = ref)}
        source={{uri: webviewUrl}}
        injectedJavaScript={scripts}
        onMessage={onMessage}
      />
      <Ripple
        style={tailwind('rounded-full absolute bottom-5 right-5')}
        styleInside={tailwind('bg-blue-800 rounded-full p-3')}
        onPress={() => navigation.navigate('HSTrackingDetailLog', {delivery})}>
        <AlertOctagon stroke="#fff" width={18} height={18} />
      </Ripple>
    </View>
  );
}
