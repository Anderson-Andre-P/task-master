import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { StyleGuide } from '../../theme/StyleGuide';
import { colors } from '../../theme';

export function CalloutButton({ text, ...otherProps }) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    lineHeight: StyleGuide.typography.body.lineHeight,
    fontWeight: '400',
    letterSpacing: 0.25,
    fontSize: StyleGuide.typography.callout.fontSize,
    color: colors.primary,
    alignSelf: 'center',
  },
});
