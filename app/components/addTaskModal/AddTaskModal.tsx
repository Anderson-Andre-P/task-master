import { TextInput, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors, fontSizes, typography } from '../../theme';
import AppCustomModal from '../CustomModal/AppCustomModal';
import React, { useState } from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import { PrimaryButton } from '../Buttons/FullButtons/PrimaryButton';
import { PrimaryMiddleButton } from '../Buttons/MiddleButtons/PrimaryMiddleButton';
import { SeccondaryMiddleButton } from '../Buttons/MiddleButtons/SecondaryMiddleButton';
import { TextTitle } from '../Texts/TextTitle';
import { TextBody } from '../Texts/TextBody';

interface TodoInputProps {
  addTask: (task: []) => void;
}

const AddTaskModal = ({ open, handleCancel, handleAddTask, addTask }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState(new Date());

  function handleAddNewTask() {
    if (!task) return;

    addTask(task);

    setTask('');

    return;
  }

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
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
          placeholder="Adicionar nova tarefa"
          placeholderTextColor="#B2B2B2"
          returnKeyType="send"
          selectionColor="#666666"
          value={task}
          onChangeText={setTask}
        />
      </View>

      <View style={styles.modalDateGroup}>
        <PrimaryButton
          onPress={showDatepicker}
          text={'Escolher a data da tarefa'}
        />
        <TextBody
          text={
            'Data selecionada: ' + new Intl.DateTimeFormat('pt-BR').format(date)
          }
          isDark={false}
        />

        {show && (
          <DateTimePicker
            minimumDate={new Date()}
            testID="dateTimePicker"
            mode="date"
            is24Hour={true}
            value={date}
            onChange={onChange}
          />
        )}
      </View>

      <View style={styles.modalFormActions}>
        <PrimaryMiddleButton onPress={handleAddNewTask} text={'Adicionar'} />
        <SeccondaryMiddleButton onPress={handleCancel} text={'Cancelar'} />
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
});

export default AddTaskModal;
