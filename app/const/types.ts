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
  active_delivery?: boolean;
  captcha_delivery?: boolean;
};

export type UserDeliveryType = DeliveryType & {
  id_tracking: string;
  code_delivery?: string;
  title_delivery?: string;
};
