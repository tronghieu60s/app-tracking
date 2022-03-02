import SettingInterface from '@components/Common/Settings/SettingInterface';
import SettingCommunity from '@components/Common/Settings/SettingsCommunity';
import SettingsOthers from '@components/Common/Settings/SettingsOthers';
import I18n from '@core/i18n';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import SSItem from './SSItem';

export default function SettingsScreen() {
  const tailwind = useTailwind();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={tailwind('bg-transparent my-1 mx-1.5')}>
        <SSItem
          title={I18n.t('app.setting.interface')}
          children={<SettingInterface />}
        />
        <SSItem
          title={I18n.t('app.setting.community')}
          children={<SettingCommunity />}
        />
        <SSItem
          title={I18n.t('app.setting.others')}
          children={<SettingsOthers />}
        />
      </View>
    </ScrollView>
  );
}
