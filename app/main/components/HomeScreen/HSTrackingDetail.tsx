import {TabOneParamList} from '@const/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {requestTrackingReloadState} from '@reducers/commonReducer';
import React, {useEffect, useRef} from 'react';
import {WebView} from 'react-native-webview';
import {useRecoilValue} from 'recoil';

export default function HSTrackingDetail() {
  const {delivery} =
    useRoute<RouteProp<TabOneParamList, 'HSTrackingDetail'>>().params;
  const webViewRef = useRef<WebView | null>();
  const requestTrackingReload = useRecoilValue(requestTrackingReloadState);

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
