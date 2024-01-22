import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { useForm } from 'react-hook-form';
import { ForgotPasswordSchema, forgotPasswordSchema } from './ForgotPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';

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
