import I18n from '@core/i18n';
import {
  BottomTabParamList,
  TabFourParamList,
  TabOneParamList,
} from '@const/types';

export const tabBarBottom: {
  [key in keyof BottomTabParamList]: {
    icon: string;
    name: string;
  };
} = {
  TabOne: {
    icon: 'Home',
    name: I18n.t('app.tab.home'),
  },
  TabFour: {
    icon: 'Settings',
    name: I18n.t('app.tab.setting'),
  },
};

type tabBarHeaderProps = TabOneParamList & TabFourParamList;

export const tabBarHeader: {
  [key in keyof tabBarHeaderProps]?: {
    name: string;
  };
} = {
  TabOneScreen: {
    name: I18n.t('app.tab.home'),
  },
  TabFourScreen: {
    name: I18n.t('app.tab.setting'),
  },
  TabApplicationInfoScreen: {
    name: I18n.t('app.tab.setting.information'),
  },
};
