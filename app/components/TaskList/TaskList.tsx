import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { ItemWrapper } from '../ItemWrapper/ItemWrapper';
import { StyleGuide } from '../../theme/StyleGuide';
import { colors } from '../../theme';

export interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function TasksList({
  tasks,
  toggleTaskDone,
  removeTask,
}: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <View>
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => toggleTaskDone(item.id)}
              >
                <View
                  testID={`marker-${index}`}
                  style={item.done ? styles.taskMarkerDone : styles.taskMarker}
                >
                  {item.done && <Icon name="check" size={12} color="#FFF" />}
                </View>
                <View style={styles.taskContent}>
                  <Text
                    style={
                      item.done
                        ? [styles.taskTextTitleDone]
                        : [styles.taskTextTitle]
                    }
                  >
                    {item.title[0]}
                  </Text>

                  <Text
                    style={item.done ? styles.taskTextDone : styles.taskText}
                  >
                    {item.title[1]}
                  </Text>
                  <Text
                    style={
                      item.done
                        ? [styles.taskStatusDone]
                        : [styles.taskStatusDontDone]
                    }
                  >
                    {item.done ? 'Concluída' : 'Não Concluída'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              testID={`trash-${index}`}
              style={{ paddingHorizontal: 24 }}
              onPress={() => removeTask(item.id)}
            >
              <Icon name="trash" size={24} color="#ff0000" />
            </TouchableOpacity>
          </ItemWrapper>
        );
      }}
      style={{
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskText: {
    color: '#666',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: '#1DB863',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskTextDone: {
    color: '#1DB863',
    textDecorationLine: 'line-through',
  },
  taskStatusDone: {
    color: '#1DB863',
  },
  taskStatusDontDone: {
    color: colors.errorBackground,
  },
  taskTextTitleDone: {
    textDecorationLine: 'line-through',
    fontSize: StyleGuide.typography.title3.fontSize,
    lineHeight: StyleGuide.typography.title3.lineHeight,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: colors.primary,
    marginBottom: StyleGuide.spacing,
  },
  taskTextTitle: {
    fontSize: StyleGuide.typography.title3.fontSize,
    lineHeight: StyleGuide.typography.title3.lineHeight,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: colors.primary,
    marginBottom: StyleGuide.spacing,
  },
  taskContent: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 200,
  },
});
