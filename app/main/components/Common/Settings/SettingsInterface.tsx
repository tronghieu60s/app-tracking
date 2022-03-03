import Modal from '@components/Base/Common/Modal';
import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import {SSItemSelect} from '@components/SettingScreen/SSComponents';
import {objToArrByKey} from '@core/commonFuncs';
import I18n, {translations} from '@core/i18n';
import {APP_PUBLISHER_EMAIL} from '@env';
import {languageState} from '@reducers/baseReducer';
import React, {useCallback, useState} from 'react';
import {Image, Linking, View} from 'react-native';
import RNRestart from 'react-native-restart';
import {useSetRecoilState} from 'recoil';
import {useTailwind} from 'tailwind-rn';

const languages = {
  en: {
    name: 'English',
    image: require('@assets/images/flag-uk.png'),
  },
  vi: {
    name: 'Tiếng Việt',
    image: require('@assets/images/flag-vn.png'),
  },
};

export default function SettingsInterface() {
  const tailwind = useTailwind();
  const setLanguage = useSetRecoilState(languageState);
  const [modalVisible, setModalVisible] = useState(false);

  const setChangeLanguage = useCallback(
    (language: keyof typeof translations) => {
      setLanguage(language);
      setModalVisible(false);
      RNRestart.Restart();
    },
    [setLanguage],
  );

  return (
    <View style={tailwind('items-start')}>
      <SSItemSelect
        title={I18n.t('app.setting.interfaceLang.title')}
        description={`${I18n.t('app.setting.interfaceLang.description')} ${
          languages[I18n.currentLocale().slice(0, 2) as 'en' | 'vi'].name
        }.`}
        onPress={() => setModalVisible(true)}
      />
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View style={tailwind('w-9/12 bg-white rounded-md px-8 py-4')}>
          {objToArrByKey(languages).map(({key, name, image}) => (
            <Ripple key={key} onPress={() => setChangeLanguage(key)}>
              <View
                style={tailwind('w-full flex-row items-center my-1.5 py-0.5')}>
                <Image style={tailwind('w-8 h-8 mr-3')} source={image} />
                <OpenSansText style={tailwind('text-sm font-bold')}>
                  {name}
                </OpenSansText>
              </View>
            </Ripple>
          ))}
        </View>
      </Modal>
      <OpenSansText style={tailwind('text-xs my-2')}>
        {I18n.t('app.setting.interfaceTracking')}{' '}
        <OpenSansText
          style={tailwind('underline')}
          onPress={() => Linking.openURL(`mailto:${APP_PUBLISHER_EMAIL}`)}>
          {APP_PUBLISHER_EMAIL}
        </OpenSansText>
      </OpenSansText>
    </View>
  );
}
