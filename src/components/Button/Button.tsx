import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';

interface ButtonProps {
  title: string
}
export function Button({title}: ButtonProps) {
 
  const {colors} = useTheme<Theme>();
 
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.buttonPrimary,
        alignItems: 'center',
        borderRadius:16,
      }}>
      <Text style={{color: colors.background}}>{title}</Text>
    </TouchableOpacity>
  );
}
