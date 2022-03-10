import {OpenSansText} from '@components/Base/StyledText';
import {Ripple} from '@components/Base/Theme';
import {UserDeliveryType} from '@const/types';
import {getDateTimeFromSql, truncate} from '@core/commonFuncs';
import React from 'react';
import {Image, View} from 'react-native';
import {Activity, Clock, Edit, Trash} from 'react-native-feather';
import {useTailwind} from 'tailwind-rn';

type Props = {
  delivery: UserDeliveryType;
  onPressItem: () => void;
  onPressEdit: () => void;
  onPressDelete: () => void;
};

const getImage = (encode_delivery: string) => {
  switch (encode_delivery) {
    case 'best':
      return require('@assets/images/best.png');
    case 'ghn':
      return require('@assets/images/ghn.png');
    case 'ghtk':
      return require('@assets/images/ghtk.png');
    case 'jte':
      return require('@assets/images/jte.png');
    case 'ninja':
      return require('@assets/images/ninja.png');
    case 'spe':
      return require('@assets/images/spe.png');
    case 'vnp':
      return require('@assets/images/vnp.png');
    case 'vtp':
      return require('@assets/images/vtp.png');
    default:
      break;
  }
};

const formatDateTime = (dateTime: Date) => {
  return `${('00' + dateTime.getFullYear()).slice(-2)}.${(
    '00' + dateTime.getMonth()
  ).slice(-2)}.${('00' + dateTime.getDate()).slice(-2)}, ${(
    '00' + dateTime.getHours()
  ).slice(-2)}:${('00' + dateTime.getMinutes()).slice(-2)}`;
};

export default function TrackingListItem(props: Props) {
  const tailwind = useTailwind();

  return (
    <Ripple
      style={tailwind('rounded-lg bg-white my-1')}
      styleInside={tailwind('rounded-lg p-4 pb-5')}
      onPress={props.onPressItem}>
      <View style={tailwind('flex-row justify-between items-center')}>
        <View style={tailwind('w-2/12')}>
          <Image
            style={tailwind('w-10 h-10 bg-white rounded-lg')}
            source={getImage(props.delivery.encode_delivery || '')}
          />
        </View>
        <View style={tailwind('w-8/12')}>
          <OpenSansText
            style={tailwind(
              'text-slate-900 text-base font-semibold underline',
            )}>
            {props.delivery.title_delivery}
          </OpenSansText>
          <View style={tailwind('flex-row items-center mt-1.5')}>
            <Activity
              stroke="#000"
              width={13}
              height={13}
              style={tailwind('mr-2')}
            />
            <OpenSansText style={tailwind('text-slate-900 text-xs')}>
              {truncate(props.delivery.code_delivery || '', 10)} |{' '}
              {props.delivery.name_delivery}
            </OpenSansText>
          </View>
          <View style={tailwind('flex-row items-center mt-1.5')}>
            <Clock
              stroke="#000"
              width={13}
              height={13}
              style={tailwind('mr-2')}
            />
            <OpenSansText style={tailwind('text-slate-900 text-xs')}>
              {formatDateTime(
                getDateTimeFromSql(props.delivery?.created_at || ''),
              )}
            </OpenSansText>
          </View>
        </View>
        <View style={tailwind('w-2/12 flex-row justify-end')}>
          <Ripple
            style={tailwind('rounded-full mr-2')}
            styleInside={tailwind('rounded-full p-1')}
            onPress={props.onPressEdit}>
            <Edit stroke="#000" width={16} height={16} />
          </Ripple>
          <Ripple
            style={tailwind('rounded-full')}
            styleInside={tailwind('rounded-full p-1')}
            onPress={props.onPressDelete}>
            <Trash stroke="#000" width={16} height={16} />
          </Ripple>
        </View>
      </View>
    </Ripple>
  );
}
