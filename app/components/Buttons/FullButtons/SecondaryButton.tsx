import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../../theme';
import { SecondaryTextButton } from '../../Texts/SecondaryTextButton';
import { StyleGuide } from '../../../theme/StyleGuide';

export function SecondaryButton({
  text,
  secondaryButtonCustomStyle,
  ...otherProps
}) {
  return (
    <Pressable
      style={[styles.button, secondaryButtonCustomStyle]}
      {...otherProps}
    >
      {<SecondaryTextButton text={text} />}
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
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: 'transparent',
    color: colors.primary,
    marginBottom: StyleGuide.spacing,
  },
});
