import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { StyleGuide } from '../../theme/StyleGuide';
import { colors } from '../../theme';

export function SecondaryTextButton({ text, ...otherProps }) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: StyleGuide.typography.callout.fontSize,
    lineHeight: StyleGuide.typography.callout.lineHeight,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: colors.primary,
  },
});
