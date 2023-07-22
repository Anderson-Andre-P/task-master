import React from 'react';
import { Text, View } from 'react-native';
import process from 'tailwindcss/lib';
import styles from './styles.css';
import { Button } from './app/components/Button';
import { Icon } from './app/components/Icon';
import { colors } from './app/theme';
import { Card } from './app/components/Card';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!!</Text>
      <Button text="Olá" />
      <Button text="Olá tudfo bem" />
      <Card
        verticalAlignment="space-between"
        LeftComponent={<Text>Left</Text>}
        RightComponent={<Text>Right</Text>}
        heading="Card Heading"
        content="Card Content"
        footer="Card Footer"
      />
      <Icon icon="bell" color={colors.lightIcons} />
    </View>
  );
}
