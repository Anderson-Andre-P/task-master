import {
  TouchableWithoutFeedback,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { colors, fontSizes, typography } from '../../theme';
import AppCustomModal from '../CustomModal/AppCustomModal';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import DropDownPicker from 'react-native-dropdown-picker';

interface TodoInputProps {
  addTask: (task: string) => void;
}

const AddTaskModal = ({ open, handleCancel, handleAddTask, addTask }) => {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if (!task) return;

    addTask(task);

    setTask('');

    return;
  }

  return (
    <AppCustomModal open={open}>
      <Text style={styles.modalHeading}>Adicionar tarefa</Text>

      {/* <TodoInput addTask={handleAddTask} /> */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar novo todo..."
          placeholderTextColor="#B2B2B2"
          returnKeyType="send"
          selectionColor="#666666"
          value={task}
          onChangeText={setTask}
          onSubmitEditing={handleAddNewTask}
        />
        {/* <TouchableOpacity
          testID="add-new-task-button"
          activeOpacity={0.7}
          style={styles.addButton}
          onPress={handleAddNewTask}
        >
          <Icon name="chevron-right" size={24} color="#B2B2B2" />
        </TouchableOpacity> */}
      </View>

      <View style={styles.modalFormActions}>
        <TouchableWithoutFeedback onPress={handleAddNewTask}>
          <View
            style={[
              styles.modalFormAction,
              styles.primaryButton,
              { marginRight: 6 },
            ]}
          >
            <Text style={styles.modalFormActionText}>Adicionar</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleCancel}>
          <View
            style={[
              styles.modalFormAction,
              styles.secondaryButton,
              { marginLeft: 6 },
            ]}
          >
            <Text
              style={[
                styles.modalFormActionText,
                styles.modalFormActionTextSecondary,
              ]}
            >
              Cancelar
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </AppCustomModal>
  );
};

export const styles = StyleSheet.create({
  modalHeading: {
    color: colors.primary,
    fontFamily: typography.primaryText.normal,
    fontSize: fontSizes.medium,
    marginBottom: 42,
  },
  modalForm: {},
  modalFormGroup: {
    marginBottom: 24,
  },
  modalFormLabel: {
    color: colors.primary,
    fontFamily: typography.primaryText.normal,
    fontSize: fontSizes.medium,
    marginBottom: 12,
  },
  modalFormInput: {
    backgroundColor: colors.darkBackground,
    color: colors.primary,
    fontFamily: typography.primaryText.normal,
    fontSize: fontSizes.medium,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  dropdownText: {
    color: colors.primary,
    fontFamily: typography.primaryText.normal,
    fontSize: fontSizes.medium,
  },
  dropdownLabel: {
    color: colors.primary,
    fontFamily: typography.primaryText.normal,
    fontSize: fontSizes.medium,
  },
  dropdownContainer: {
    backgroundColor: colors.darkBackground,
    borderColor: colors.primary,
  },
  dropdownPlaceholder: {
    color: colors.primary,
    fontFamily: typography.primaryText.normal,
    fontSize: fontSizes.medium,
  },
  modalFormActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    zIndex: -1,
  },
  modalFormAction: {
    width: 120,
    borderRadius: 12,
    padding: 12,
    marginLeft: 0,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.error,
  },
  modalFormActionText: {
    color: colors.darkTitle,
    fontFamily: typography.primaryTitle.bold,
    fontSize: fontSizes.small,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  modalFormActionTextSecondary: {
    color: colors.error,
  },

  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginTop: -28,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: '#EBEBEB',
    color: '#666666',
  },
  addButton: {
    backgroundColor: '#FFF',
    height: 56,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default AddTaskModal;
