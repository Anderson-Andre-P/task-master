import { Platform } from 'react-native';
import {
  Poppins_300Light as poppinsLight,
  Poppins_400Regular as poppinsRegular,
  Poppins_500Medium as poppinsMedium,
  Poppins_600SemiBold as poppinsSemiBold,
  Poppins_700Bold as poppinsBold,
} from '@expo-google-fonts/poppins';

import {
  Roboto_300Light as robotoLight,
  Roboto_400Regular as robotoRegular,
  Roboto_500Medium as robotoMedium,
  Roboto_700Bold as robotoBold,
} from '@expo-google-fonts/roboto';

export const customFontsToLoad = {
  poppinsLight,
  poppinsBold,
  poppinsSemiBold,
  poppinsRegular,
  poppinsMedium,
  robotoBold,
  robotoLight,
  robotoMedium,
  robotoRegular,
};

const fonts = {
  poppins: {
    // Cross-platform Google font.
    light: 'poppinsLight',
    normal: 'poppinsRegular',
    medium: 'poppinsMedium',
    semiBold: 'poppinsSemiBold',
    bold: 'poppinsBold',
  },
  roboto: {
    light: 'robotoLight',
    normal: 'robotoRegular',
    medium: 'robotoMedium',
    bold: 'robotoBold',
  },
  helveticaNeue: {
    // iOS only font.
    thin: 'HelveticaNeue-Thin',
    light: 'HelveticaNeue-Light',
    normal: 'Helvetica Neue',
    medium: 'HelveticaNeue-Medium',
  },
  courier: {
    // iOS only font.
    normal: 'Courier',
  },
  sansSerif: {
    // Android only font.
    thin: 'sans-serif-thin',
    light: 'sans-serif-light',
    normal: 'sans-serif',
    medium: 'sans-serif-medium',
  },
  monospace: {
    // Android only font.
    normal: 'monospace',
  },
};

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary title font. Used in  titles ans subtitles.
   */
  primaryTitle: fonts.poppins,

  /**
   * The primary text font. Used in body, buttons, captions, overlines.
   */
  primaryText: fonts.roboto,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({
    ios: fonts.helveticaNeue,
    android: fonts.sansSerif,
  }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
};
