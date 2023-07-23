import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header/Header';
import { TasksList } from '../components/TaskList/TaskList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import AddTaskModal from '../components/addTaskModal/AddTaskModal';
import { colors } from '../theme';
import { FabButton } from '../components/Buttons/FabButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export interface Task {
  id: number;
  title: string;
  done: boolean;
  date: Date; // Adicione este campo para representar a data da tarefa
}

function Home({ navigation: { navigate } }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [dates, setDates] = useState<Date[]>([]);

  function handleAddTask(newTaskTitle: string, newTaskDate: Date) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
      date: newTaskDate, // Adicione a data à estrutura da tarefa
    };

    setTasks((oldTasks) => [...oldTasks, newTask]);

    setAddModalVisible(false);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map((task) => ({ ...task }));

    const foundItem = updatedTasks.find((item) => item.id === id);

    if (!foundItem) return;

    foundItem.done = !foundItem.done;

    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    const updatedTask = tasks.filter((task) => task.id !== id);

    setTasks(updatedTask);
  }

  const [addModalVisible, setAddModalVisible] = useState(false);

  const handleCancelAdd = () => {
    setAddModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      {/* <PrimaryButton
        onPress={() => {
          setAddModalVisible(true);
        }}
        text={'Adicionar nova tarefa'}
      /> */}

      <FabButton
        onPress={() => {
          setAddModalVisible(true);
        }}
        text={'+'}
      />

      <AddTaskModal
        open={addModalVisible}
        handleCancel={handleCancelAdd}
        handleAddTask={(task, date) => handleAddTask(task, date)}
        addTask={(task, date) => handleAddTask(task, date)}
      />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBackground,
  },
});

export default Home;
