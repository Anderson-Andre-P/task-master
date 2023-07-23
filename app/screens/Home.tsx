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
  description: string;
  done: boolean;
}

export default function Home({ navigation: { navigate } }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string, newTaskDescription: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      description: newTaskDescription,
      done: false,
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

      <FabButton
        onPress={() => {
          setAddModalVisible(true);
        }}
        text={'+'}
      />

      <AddTaskModal
        open={addModalVisible}
        handleCancel={handleCancelAdd}
        addTask={handleAddTask}
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
