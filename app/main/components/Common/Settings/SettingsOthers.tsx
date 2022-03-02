import {SSItemSelectTab} from '@components/SettingScreen/SSComponents';
import {TabFourParamList} from '@const/types';
import I18n from '@core/i18n';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default function SettingsOthers() {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<TabFourParamList, 'TabApplicationInfoScreen'>
    >();
  return (
    <View>
      <SSItemSelectTab
        title={I18n.t('app.setting.others.information')}
        smallText={DeviceInfo.getVersion()}
        onPress={() => navigation.navigate('TabApplicationInfoScreen')}
      />
      {/* <SSItemSelectTab
        title={I18n.t('app.setting.others.backupRestore')}
        onPress={() => navigation.navigate('TabBackupRestoreScreen')}
      /> */}
    </View>
  );
}
