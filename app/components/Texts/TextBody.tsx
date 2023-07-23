import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { StyleGuide } from '../../theme/StyleGuide';
import { colors } from '../../theme';

export function TextBody({ text, isDark, ...otherProps }) {
  return (
    <Text style={[styles.text, isDark ? styles.lightText : styles.darkText]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: StyleGuide.typography.body.fontSize,
    lineHeight: StyleGuide.typography.body.lineHeight,
    fontWeight: '400',
    letterSpacing: 0.25,
  },
  lightText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});
