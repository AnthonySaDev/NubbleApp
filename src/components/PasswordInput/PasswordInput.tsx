import React, {useState} from 'react';

import {TextInput, TextInputProps, Icon} from '@components';

export type PasswordInputProps = TextInputProps;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      RightComponent={
        <Icon
          onPress={() => setIsSecureTextEntry(prev => !prev)}
          name={isSecureTextEntry ? 'eyeOff' : 'eyeOn'}
          color="gray2"
        />
      }
      {...props}
    />
  );
}
