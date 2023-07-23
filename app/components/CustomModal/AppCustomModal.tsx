import React from 'react';
import { View, TouchableWithoutFeedback, Modal, Keyboard } from 'react-native';

const AppCustomModal = ({ open, children }) => {
  return (
    <Modal visible={open} transparent>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.overlay50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: colors.lightCardBackground,
    width: '90%',
    padding: 24,
    borderRadius: 4,
    elevation: 3,
  },
});

export default AppCustomModal;
