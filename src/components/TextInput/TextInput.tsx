import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import { Box, BoxProps } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';
import { useAppTheme } from '@hooks';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}
export function TextInput({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...props
}: TextInputProps) {
  const { colors } = useAppTheme();

  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'redError' : 'gray2',
    borderRadius: 's12',
    padding: 's16',
    flexDirection: 'row',
    alignItems: 'center',
  };
  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" bold mb="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            style={$textInputStyle}
            placeholderTextColor={colors.gray2}
            {...props}
          />
          {RightComponent && <Box ml="s16">{RightComponent}</Box>}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="redError">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  flexGrow: 1,
  flexShrink: 1,
  ...$fontSizes.paragraphMedium,
};
