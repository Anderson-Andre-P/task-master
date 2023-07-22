import { FlexStyle } from 'react-native';
import { Edge, useSafeAreaInsets } from 'react-native-safe-area-context';

export type ExtendedEdge = Edge | 'start' | 'end';

const propertySuffixMap = {
  top: 'Top',
  bottom: 'Bottom',
  left: 'Start',
  right: 'End',
  start: 'Start',
  end: 'End',
};

const edgeInsetMap = {
  start: 'left',
  end: 'right',
};

export function useSafeAreaInsetsStyle(
  safeAreaEdges: ExtendedEdge[] = [],
  property: 'padding' | 'margin' = 'padding',
): Pick<
  FlexStyle,
  | 'marginBottom'
  | 'marginEnd'
  | 'marginStart'
  | 'marginTop'
  | 'paddingBottom'
  | 'paddingEnd'
  | 'paddingStart'
  | 'paddingTop'
> {
  const insets = useSafeAreaInsets();

  return safeAreaEdges.reduce((acc, e) => {
    return {
      ...acc,
      [`${property}${propertySuffixMap[e]}`]: insets[edgeInsetMap[e] ?? e],
    };
  }, {});
}
