import Modal from '@components/Base/Common/Modal';
import {UserDeliveryType} from '@const/types';
import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import TrackingListEdit from './TrackingListEdit';
import TrackingListItem from './TrackingListItem';

type Props = {
  deliveries: UserDeliveryType[];
  deliverySelected: UserDeliveryType;
  setDeliverySelected: (deliverySelected: UserDeliveryType) => void;
  onPressEdit: (delivery: UserDeliveryType) => void;
  onPressHandleEdit: () => void;
  onPressDelete: (delivery: UserDeliveryType) => void;
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

export default function TrackingList(props: Props) {
  const tailwind = useTailwind();
  const {deliverySelected, setDeliverySelected} = props;

  // ---- Render
  const renderItem = useCallback(
    ({item}) => (
      <TrackingListItem
        delivery={item}
        onPressEdit={() => props.onPressEdit(item)}
        onPressDelete={() => props.onPressDelete(item)}
      />
    ),
    [props],
  );

  return (
    <View>
      <FlatList
        data={props.deliveries}
        renderItem={renderItem}
        contentContainerStyle={tailwind('px-2 py-1')}
        showsVerticalScrollIndicator={false}
      />
      <Modal
        modalVisible={props.modalVisible}
        setModalVisible={props.setModalVisible}>
        <View style={tailwind('w-11/12 bg-white rounded-md px-8 py-6')}>
          <TrackingListEdit
            deliverySelected={deliverySelected}
            onPressHandleEdit={props.onPressHandleEdit}
            setDeliverySelected={setDeliverySelected}
          />
        </View>
      </Modal>
    </View>
  );
}
