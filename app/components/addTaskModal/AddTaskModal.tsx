import { TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import { PrimaryButton } from '../Buttons/FullButtons/PrimaryButton';
import { TextTitle } from '../Texts/TextTitle';
import { TextBody } from '../Texts/TextBody';
import { AppCustomModal } from '../CustomModal/AppCustomModal';
import { SecondaryButton } from '../Buttons/FullButtons/SecondaryButton';

interface TodoInputProps {
  addTask: (task: []) => void;
}

const AddTaskModal = ({ open, handleCancel, addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState(new Date());

  function handleAddNewTask() {
    if (!taskTitle) return;
    if (!taskDescription) return;

    addTask([taskTitle, taskDescription]);

    setTaskTitle('');
    setTaskDescription('');

    return;
  }

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setTaskDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <AppCustomModal open={open}>
      <TextTitle text={'Adicionar tarefa'} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          placeholderTextColor="#B2B2B2"
          returnKeyType="send"
          selectionColor="#666666"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          placeholderTextColor="#B2B2B2"
          returnKeyType="send"
          selectionColor="#666666"
          value={taskDescription}
          onChangeText={setTaskDescription}
        />
      </View>

      <View style={styles.modalDateGroup}>
        <PrimaryButton
          onPress={showDatepicker}
          text={'Escolher a data da tarefa'}
          primaryButtonCustomStyle={styles.primaryButtonStyle}
        />
        <TextBody
          text={
            'Data selecionada: ' +
            new Intl.DateTimeFormat('pt-BR').format(taskDate)
          }
          isDark={false}
        />

        {show && (
          <DateTimePicker
            minimumDate={new Date()}
            testID="dateTimePicker"
            mode="date"
            is24Hour={true}
            value={taskDate}
            onChange={() => setTaskDate}
          />
        )}
      </View>

      <View style={styles.modalFormActions}>
        <PrimaryButton
          onPress={handleAddNewTask}
          text={'Adicionar'}
          primaryButtonCustomStyle={styles.primaryButtonStyle_2}
        />
        <SecondaryButton
          onPress={handleCancel}
          text={'Cancelar'}
          secondaryButtonCustomStyle={styles.primaryButtonStyle_2}
        />
      </View>
    </AppCustomModal>
  );
};

export const styles = StyleSheet.create({
  modalFormActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: -1,
  },
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
  modalDateGroup: {
    marginBottom: 12,
  },

  primaryButtonStyle: {
    width: '100%',
  },
  primaryButtonStyle_2: {
    width: '48%',
  },
  secondaryButtonStyle: {
    width: '48%',
  },
});

export default AddTaskModal;
