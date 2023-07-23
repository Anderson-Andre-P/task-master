import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  const tasksCounterText = tasksCounter === 1 ? 'tarefa' : 'tarefas';

  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>Você tem </Text>
        <Text style={styles.tasksCounterBold}>
          {tasksCounter} {tasksCounterText}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: '#8257E5',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tasks: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  tasksCounter: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Regular',
  },
  tasksCounterBold: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Bold',
  },
});
