import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export default function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    //TODO: implementar
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é necessário fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" bold mb="s32">
        Criar uma conta
      </Text>
      <TextInput boxProps={{mb: 's20'}} label="Seu username" placeholder="@" />
      <TextInput
        boxProps={{mb: 's20'}}
        label="Nome completo"
        placeholder="Digite seu nome completo"
      />
      <TextInput
        boxProps={{mb: 's20'}}
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button title="Criar uma conta" onPress={() => submitForm()} />
    </Screen>
  );
}
