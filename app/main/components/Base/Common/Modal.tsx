import React from 'react';
import {
  TouchableWithoutFeedback,
  Modal as DefaultModal,
  View,
} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

type Props = DefaultModal['props'] & {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

export default function Modal(props: Props) {
  const tailwind = useTailwind();
  const {modalVisible, setModalVisible, children, ...otherProps} = props;
  return (
    <DefaultModal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      {...otherProps}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View
          style={[
            tailwind('flex-1 justify-center items-center'),
            {backgroundColor: 'rgba(0, 0, 0, 0.5);'},
          ]}>
          <TouchableWithoutFeedback>
            <View style={tailwind('w-full justify-center items-center')}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </DefaultModal>
  );
}
