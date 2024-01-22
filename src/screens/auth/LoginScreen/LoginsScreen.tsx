import React from 'react';
import {useForm} from 'react-hook-form';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {TouchableOpacityBox} from '../../../components/Box/Box';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import { LoginSchema, loginSchema } from './LoginSchema';
import { zodResolver } from '@hookform/resolvers/zod';


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginsScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSingUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({email, password}: LoginSchema) {
    //TODO: implementar

  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge" bold>
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's20'}}
      />

      <TouchableOpacityBox onPress={navigateToForgotPasswordScreen}>
        <Text preset="paragraphSmall" bold mt="s10" color="primary">
          Esqueci minha senha
        </Text>
      </TouchableOpacityBox>
      <Button
        disabled={!formState.isValid}
        title="Entrar"
        mt="s48"
        onPress={handleSubmit(submitForm)}
      />
      <Button
        title="Criar uma conta"
        mt="s12"
        preset="outline"
        onPress={navigateToSingUpScreen}
      />
    </Screen>
  );
}
