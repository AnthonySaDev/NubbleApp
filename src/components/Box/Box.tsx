import {
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export const Box = createBox<Theme>();

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme>&
  TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
