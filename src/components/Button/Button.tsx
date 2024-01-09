import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}
export function Button({
  title,
  loading,
  ...touchableOpacityBoxPros
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityBoxPros}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text color="primaryContrast" preset="paragraphMedium" bold >
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
