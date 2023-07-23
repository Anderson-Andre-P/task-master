const palette = {
  neutral50: '#F8FAFC' /** Light Bg */,
  neutral100: '#F1F5F9',
  neutral200: '#E2E8F0' /** Light Card Bg */,
  neutral300: '#CBD5E1' /** Light Border */,
  neutral400: '#94A3B8',
  neutral500: '#64748B' /** Light Text */,
  neutral600: '#475569',
  neutral700: '#334155',
  neutral800: '#374151' /** Dark Card Bg */,
  neutral900: '#1F2937' /** Dark Bg */,

  lightTitle: '#1E293B' /** Light Title */,
  darkTitle: '#FFF' /** Dark Title */,

  lightIcons: '#98A6AD' /** Light Icon */,
  darkIcons: '#4F5E77' /** Dark Icon */,

  // lightBorder: '#E2E8F0' /** Light Border */,
  darkBorder: '#3D4D60' /** Dark Border */,

  primary50: '#EFF6FF',
  primary100: '#DBEAFE',
  primary200: '#BFDBFE' /** Secondary */,
  primary300: '#93C5FD',
  primary400: '#60A5FA',
  primary500: '#3B82F6',
  primary600: '#2563EB' /** Primary */,
  primary700: '#1D4ED8',
  primary800: '#1E40AF',
  primary900: '#1E3A8A',

  darkSecondary: '#011732',

  accent: '#f59e0b',

  error100: '#F87171',
  error200: '#DC2626',

  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)',
} as const;

export const colors = {
  palette,
  transparent: 'rgba(0, 0, 0, 0)',

  overlay50: palette.overlay50,

  lightBackground: palette.neutral50,
  darkBackground: palette.neutral900,

  lightCardBackground: palette.neutral200,
  darkCardBackground: palette.neutral800,

  lightTitle: palette.lightTitle,
  darkTitle: palette.darkTitle,

  lightText: palette.neutral500,
  darkText: palette.neutral200,

  lightIcons: palette.lightIcons,
  darkIcons: palette.darkIcons,

  lightBorder: palette.neutral300,
  darkBorder: palette.darkBorder,

  separator: palette.neutral300,

  primary: palette.primary600,
  secondary: palette.primary200,

  accent: palette.accent,

  error: palette.error200,
  errorBackground: palette.error100,
};
