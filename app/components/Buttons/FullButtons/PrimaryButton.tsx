import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../../theme';
import { StyleGuide } from '../../../theme/StyleGuide';
import { PrimaryTextButton } from '../../Texts/PrimaryTextButton';

export function PrimaryButton({
  text,
  primaryButtonCustomStyle,
  ...otherProps
}) {
  return (
    <Pressable
      style={[styles.button, styles.button, primaryButtonCustomStyle]}
      {...otherProps}
    >
      {<PrimaryTextButton text={text} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 0,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.primary,
    marginBottom: StyleGuide.spacing,
  },
});
