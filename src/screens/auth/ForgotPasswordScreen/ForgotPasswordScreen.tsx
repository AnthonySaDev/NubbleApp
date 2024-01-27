import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';
import { ForgotPasswordSchema, forgotPasswordSchema } from './ForgotPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { RootStackParamList } from '@routes';
import { useResetNavigationSuccess } from '@hooks';
import { Button, FormTextInput, Screen, Text } from '@components';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, handleSubmit, formState} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  })
  function submitForm(values : ForgotPasswordSchema) {
    console.log(values)
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
      <FormTextInput
        name='email'
        control={control}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mt: 's32'}}
      />
      <Button disabled={!formState.isValid} title="Recuperar senha" mt="s48" onPress={handleSubmit(submitForm)} />
    </Screen>
  );
}
