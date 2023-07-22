import React from 'react';
import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import { colors, typography } from '../theme';

type Sizes = keyof typeof $sizeStyles;
type Weights = keyof typeof typography.primaryText;
type Presets = keyof typeof $presets;

export interface TextProps extends RNTextProps {
  text?: string;

  style?: StyleProp<TextStyle>;

  preset?: Presets;

  weight?: Weights;

  size?: Sizes;

  children?: React.ReactNode;
}

export function Text(props: TextProps) {
  const {
    weight,
    size,

    text,
    children,
    style: $styleOverride,
    ...rest
  } = props;

  const content = text || children;

  const preset: Presets = $presets[props.preset] ? props.preset : 'default';
  const $styles = [
    $presets[preset],
    $fontWeightStyles[weight],
    $sizeStyles[size],
    $styleOverride,
  ];

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  );
}

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } satisfies TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } satisfies TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
  md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,
};

const $fontWeightStyles = Object.entries(typography.primaryText).reduce(
  (acc, [weight, fontFamily]) => {
    return { ...acc, [weight]: { fontFamily } };
  },
  {},
) as Record<Weights, TextStyle>;

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.lightText },
];

const $presets = {
  default: $baseStyle,

  bold: [$baseStyle, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  heading: [
    $baseStyle,
    $sizeStyles.xxl,
    $fontWeightStyles.bold,
  ] as StyleProp<TextStyle>,

  subheading: [
    $baseStyle,
    $sizeStyles.lg,
    $fontWeightStyles.medium,
  ] as StyleProp<TextStyle>,

  formLabel: [$baseStyle, $fontWeightStyles.medium] as StyleProp<TextStyle>,

  formHelper: [
    $baseStyle,
    $sizeStyles.sm,
    $fontWeightStyles.normal,
  ] as StyleProp<TextStyle>,
};
