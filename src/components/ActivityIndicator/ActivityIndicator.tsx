import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';
import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color, ...activityIndicatorProps}: Props) {
  const {colors} = useAppTheme();

  return (
    <RNActivityIndicator {...activityIndicatorProps} color={colors[color]} />
  );
}
