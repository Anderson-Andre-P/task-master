import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { StyleGuide } from '../../theme/StyleGuide';
import { colors } from '../../theme';

export function TextTitle({ text, ...otherProps }) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: StyleGuide.typography.title2.fontSize,
    lineHeight: StyleGuide.typography.title2.lineHeight,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: colors.primary,
    marginBottom: StyleGuide.spacing,
  },
});
