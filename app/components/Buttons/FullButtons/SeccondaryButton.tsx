import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../../theme';
import { SecondaryTextButton } from '../../Texts/SecondaryTextButton';

export function SeccondaryButton({
  text,

  ...otherProps
}) {
  return (
    <Pressable style={[styles.button]} {...otherProps}>
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
    width: '100%',
    color: colors.primary,
  },
});
