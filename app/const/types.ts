/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabFour: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  HSTrackingDetail: {delivery: UserDeliveryType};
  HSTrackingDetailLog: {delivery: UserDeliveryType};
};

export type TabFourParamList = {
  TabFourScreen: undefined;
  TabApplicationInfoScreen: undefined;
};

/* Resources App */

export type DeliveryType = {
  id_delivery: string;
  name_delivery?: string;
  description_delivery?: string;
  url_delivery?: string;
  ajax_delivery?: 0 | 1;
  active_delivery?: 0 | 1;
  captcha_delivery?: 0 | 1;
  scripts_delivery?: string;
};

export type UserDeliveryType = DeliveryType & {
  id_tracking: string;
  code_delivery?: string;
  title_delivery?: string;
  created_at?: string;
  updated_at?: string;
};
