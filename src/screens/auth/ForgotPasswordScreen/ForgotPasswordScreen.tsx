import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    //TODO: implementar
    reset({
      title: `Enviamos as instruções${'\n'}para o seu e-mail`,
      description: `Clique no link enviado no seu e-mail para redefinir sua senha`,
      icon: {
        name: 'messageRoundIcon',
        color: 'primary',
      },
    });
  }
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
      <Button title="Recuperar senha" mt="s48" onPress={submitForm} />
    </Screen>
  );
}
