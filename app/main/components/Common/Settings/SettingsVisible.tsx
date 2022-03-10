import {SSItemSwitch} from '@components/SettingScreen/SSComponents';
import {UserDeliveryType} from '@const/types';
import I18n from '@core/i18n';
import {
  visibleCodeDlState,
  visibleImageDlState,
  visibleNameDlState,
  visibleTimeDlState,
} from '@reducers/commonReducer';
import React from 'react';
import {View} from 'react-native';
import {useRecoilState} from 'recoil';
import {useTailwind} from 'tailwind-rn/dist';
import TrackingListItem from '../Tracking/TrackingListItem';

const exampleDelivery: UserDeliveryType = {
  id_delivery: '',
  name_delivery: 'J&T Express',
  description_delivery: 'J&T Express',
  encode_delivery: 'jte',
  url_delivery: '',
  ajax_delivery: 0,
  active_delivery: 0,
  captcha_delivery: 0,
  id_tracking: '',
  code_delivery: '812136874213',
  title_delivery: 'J&T Express',
  created_at: '2022-03-10 21:10:30',
  updated_at: '2022-03-10 21:10:30',
};

export default function SettingsVisible() {
  const tailwind = useTailwind();
  const [visibleImageDl, setVisibleImageDl] =
    useRecoilState(visibleImageDlState);
  const [visibleCodeDl, setVisibleCodeDl] = useRecoilState(visibleCodeDlState);
  const [visibleNameDl, setVisibleNameDl] = useRecoilState(visibleNameDlState);
  const [visibleTimeDl, setVisibleTimeDl] = useRecoilState(visibleTimeDlState);

  return (
    <View style={tailwind('items-start')}>
      <TrackingListItem delivery={exampleDelivery} />
      <SSItemSwitch
        title={I18n.t('app.setting.visibleImageDl.title')}
        description={I18n.t('app.setting.visibleImageDl.description')}
        value={visibleImageDl}
        onPress={() => setVisibleImageDl(!visibleImageDl)}
      />
      <SSItemSwitch
        title={I18n.t('app.setting.visibleCodeDl.title')}
        description={I18n.t('app.setting.visibleCodeDl.description')}
        value={visibleCodeDl}
        onPress={() => setVisibleCodeDl(!visibleCodeDl)}
      />
      <SSItemSwitch
        title={I18n.t('app.setting.visibleNameDl.title')}
        description={I18n.t('app.setting.visibleNameDl.description')}
        value={visibleNameDl}
        onPress={() => setVisibleNameDl(!visibleNameDl)}
      />
      <SSItemSwitch
        title={I18n.t('app.setting.visibleTimeDl.title')}
        description={I18n.t('app.setting.visibleTimeDl.description')}
        value={visibleTimeDl}
        onPress={() => setVisibleTimeDl(!visibleTimeDl)}
      />
    </View>
  );
}
