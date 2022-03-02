import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import I18n from '@core/i18n';
import {APP_PUBLISHER_EMAIL} from '@env';
import React from 'react';
import {Linking, Share, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {MessageSquare, Package, Share2, Star} from 'react-native-feather';
import {useTailwind} from 'tailwind-rn/dist';

const packageName = DeviceInfo.getBundleId()
  .replace('.debug', '')
  .replace('.staging', '');
const GOOGLE_STORE_URL = `https://play.google.com/store/apps/details?id=${packageName}`;
const GOOGLE_STORE_STUDIO_URL =
  'https://play.google.com/store/apps/developer?id=EStudy+Studio';

const onPressRating = () => Linking.openURL(GOOGLE_STORE_URL);

const onPressFeedback = () => Linking.openURL(`mailto:${APP_PUBLISHER_EMAIL}`);

const onPressShare = () => {
  const message = `${I18n.t(
    'app.setting.community.share.description',
  )}\n\n${GOOGLE_STORE_URL}`;
  Share.share({message});
};

const onPressRelate = () => Linking.openURL(GOOGLE_STORE_STUDIO_URL);

export default function SettingsCommunity() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('items-start')}>
      <Ripple style={tailwind('w-full')} onPress={onPressRating}>
        <View style={tailwind('bg-transparent flex-row items-center py-3')}>
          <Star stroke="#1e40af" fill="#fff" width={23} height={23} />
          <OpenSansText style={tailwind('font-bold ml-3')}>
            {I18n.t('app.setting.community.rating')}
          </OpenSansText>
        </View>
      </Ripple>
      <Ripple style={tailwind('w-full')} onPress={onPressFeedback}>
        <View style={tailwind('bg-transparent flex-row items-center py-3')}>
          <MessageSquare stroke="#1e40af" fill="#fff" width={23} height={23} />
          <OpenSansText style={tailwind('font-bold ml-3')}>
            {I18n.t('app.setting.community.feedback')}
          </OpenSansText>
        </View>
      </Ripple>
      <Ripple style={tailwind('w-full')} onPress={onPressShare}>
        <View style={tailwind('bg-transparent flex-row items-center py-3')}>
          <Share2 stroke="#1e40af" fill="#fff" width={23} height={23} />
          <OpenSansText style={tailwind('font-bold ml-3')}>
            {I18n.t('app.setting.community.share')}
          </OpenSansText>
        </View>
      </Ripple>
      <Ripple style={tailwind('w-full')} onPress={onPressRelate}>
        <View style={tailwind('bg-transparent flex-row items-center py-3')}>
          <Package stroke="#1e40af" fill="#fff" width={23} height={23} />
          <OpenSansText style={tailwind('font-bold ml-3')}>
            {I18n.t('app.setting.community.relate')}
          </OpenSansText>
        </View>
      </Ripple>
    </View>
  );
}
