import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../theme";
import { TextBody } from "../Texts/TextBody";

interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  const tasksCounterText = tasksCounter === 1 ? "tarefa" : "tarefas";

  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <TextBody
          text={`Você tem ${tasksCounter} ${tasksCounterText} para fazer... `}
          isDark={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 24,
    paddingBottom: 40,
    backgroundColor: colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  tasks: {
    alignItems: "center",
    flexDirection: "row",
  },
});
