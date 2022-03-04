import {TabOneParamList} from '@const/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {requestTrackingReloadState} from '@reducers/commonReducer';
import I18n from 'i18n-js';
import React, {useEffect, useRef} from 'react';
import {Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import {useRecoilValue} from 'recoil';

export default function HSTrackingDetail() {
  const {delivery} =
    useRoute<RouteProp<TabOneParamList, 'HSTrackingDetail'>>().params;
  const webViewRef = useRef<WebView | null>();
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

  return (
    <WebView
      ref={ref => (webViewRef.current = ref)}
      source={{uri: `${delivery.url_delivery}${delivery.code_delivery}`}}
    />
  );
}
