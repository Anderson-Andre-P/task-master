import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Header } from '../components/Header/Header';
import { Task, TasksList } from '../components/TaskList/TaskList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import AddTaskModal from '../components/addTaskModal/AddTaskModal';
import AppCustomModal from '../components/CustomModal/AppCustomModal';
import { Button } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({ navigation: { navigate } }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
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

      <TouchableOpacity
        onPress={() => {
          setAddModalVisible(true);
        }}
      >
        <Text>
          Adicionar nova tarefa
          <AddTaskModal
            open={addModalVisible}
            handleCancel={handleCancelAdd}
            handleAddTask={handleAddTask}
            addTask={handleAddTask}
          />
        </Text>
      </TouchableOpacity>

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
    backgroundColor: '#EBEBEB',
  },
});

export default Home;
