import {OpenSansText} from '@components/Base/StyledText';
import I18n from '@core/i18n';
import React from 'react';
import DeviceInfo from 'react-native-device-info';
import {APP_DATA_VERSION, APP_PUBLISHER_NAME} from '@env';
import {Image, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

export default function SSApplicationInfo() {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(
        'bg-white flex-1 justify-between items-center px-10 py-10',
      )}>
      <View style={tailwind('w-full bg-transparent items-center')}>
        <Image
          style={tailwind('w-20 h-20 rounded-full')}
          source={require('@assets/images/ic_launcher.png')}
        />
        <View style={tailwind('bg-transparent items-center')}>
          <OpenSansText
            style={tailwind('text-blue-700 text-lg font-bold mt-4')}>
            {APP_PUBLISHER_NAME}
          </OpenSansText>
          <OpenSansText style={tailwind('text-base font-semibold mt-1')}>
            {I18n.t('app.header.application')}
          </OpenSansText>
        </View>
        <View style={tailwind('w-full bg-transparent mt-5')}>
          <OpenSansText style={tailwind('text-sm my-0.5')}>
            <OpenSansText style={tailwind('font-bold')}>
              {I18n.t('app.setting.others.information.device')}:
            </OpenSansText>{' '}
            {DeviceInfo.getModel()}
          </OpenSansText>
          <OpenSansText style={tailwind('text-sm my-0.5')}>
            <OpenSansText style={tailwind('font-bold')}>
              {I18n.t('app.setting.others.information.appVersion')}:
            </OpenSansText>{' '}
            {DeviceInfo.getVersion()}
          </OpenSansText>
          <OpenSansText style={tailwind('text-sm my-0.5')}>
            <OpenSansText style={tailwind('font-bold')}>
              {I18n.t('app.setting.others.information.appDataVersion')}:
            </OpenSansText>{' '}
            {APP_DATA_VERSION}
          </OpenSansText>
        </View>
      </View>
      <OpenSansText style={tailwind('uppercase text-xs font-semibold mt-2')}>
        @{process.env.NODE_ENV || 'Development'} - {new Date().getFullYear()}
      </OpenSansText>
    </View>
  );
}
