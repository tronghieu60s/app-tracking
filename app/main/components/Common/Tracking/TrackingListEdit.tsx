import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import {UserDeliveryType} from '@const/types';
import I18n from 'i18n-js';
import React, {useCallback} from 'react';
import {TextInput, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

type Props = {
  deliverySelected: UserDeliveryType;
  setDeliverySelected: (deliverySelected: UserDeliveryType) => void;
  onPressHandleEdit: () => void;
};

export default function TrackingListEdit(props: Props) {
  const tailwind = useTailwind();
  const {deliverySelected, setDeliverySelected} = props;

  const onChangeText = useCallback(
    (title_delivery: string) => {
      setDeliverySelected({
        ...deliverySelected,
        title_delivery,
      });
    },
    [deliverySelected, setDeliverySelected],
  );

  return (
    <View>
      <OpenSansText style={tailwind('capitalize text-base font-semibold')}>
        {I18n.t('app.tracking.edit.title')}
      </OpenSansText>
      <View style={tailwind('mt-6')}>
        <TextInput
          value={deliverySelected?.title_delivery}
          onChangeText={onChangeText}
          placeholder={I18n.t('app.tracking.nameInput.placeholder')}
          style={tailwind('border border-slate-700 rounded-md px-3 py-2')}
        />
      </View>
      <View style={tailwind('mt-6 items-end')}>
        <Ripple
          style={tailwind('rounded-md')}
          styleInside={tailwind('rounded-md bg-blue-600 p-2')}
          onPress={props.onPressHandleEdit}>
          <OpenSansText
            style={tailwind('capitalize text-sm text-white self-center')}>
            {I18n.t('app.tracking.edit.button.placeholder')}
          </OpenSansText>
        </Ripple>
      </View>
    </View>
  );
}
