import SettingsCommunity from '@components/Common/Settings/SettingsCommunity';
import SettingsInterface from '@components/Common/Settings/SettingsInterface';
import SettingsOthers from '@components/Common/Settings/SettingsOthers';
import SettingsVisible from '@components/Common/Settings/SettingsVisible';
import I18n from '@core/i18n';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import SSItem from './SSItem';

export default function SSSettings() {
  const tailwind = useTailwind();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={tailwind('bg-transparent my-1 mx-1.5')}>
        <SSItem
          title={I18n.t('app.setting.interface')}
          children={<SettingsInterface />}
        />
        <SSItem
          title={I18n.t('app.setting.visible')}
          children={<SettingsVisible />}
        />
        <SSItem
          title={I18n.t('app.setting.community')}
          children={<SettingsCommunity />}
        />
        <SSItem
          title={I18n.t('app.setting.others')}
          children={<SettingsOthers />}
        />
      </View>
    </ScrollView>
  );
}
