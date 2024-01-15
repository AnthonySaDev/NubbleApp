import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';

export function ForgotPasswordScreen() {
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" bold>
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mt: 's32'}}
      />
      <Button title="Recuperar senha" mt="s48" />
    </Screen>
  );
}
