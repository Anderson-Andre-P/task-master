import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { colors, fontSizes, spacing, typography } from '../theme';

const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={colors.lightBorder}
      style={[
        {
          fontFamily: typography.primaryText.normal,
          fontSize: fontSizes.medium,
          padding: 14,
          backgroundColor: colors.lightBackground,
          borderRadius: 4,
          marginVertical: spacing.sm,
        },
        focused && {
          borderWidth: 3,
          borderColor: colors.primary,
          shadowOffset: { width: 4, height: 10 },
          shadowColor: colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: spacing.sm,
        },
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
