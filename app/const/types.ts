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
