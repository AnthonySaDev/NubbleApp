import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {RootStackParamList} from '@routes';

import {SignUpSchema, signupSchema} from './signUpSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formvalues: SignUpSchema) {
    console.log(formvalues);
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

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Nome completo"
        boxProps={{mb: 's20'}}
        autoCapitalize="words"
      />

      <FormTextInput
        control={control}
        name="email"
        label="Seu e-mail"
        placeholder="E-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        disabled={!formState.isValid}
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
