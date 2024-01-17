import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {TouchableOpacityBox} from '../../../components/Box/Box';

type LoginFormType = {
  email: string;
  password: string;
};
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginsScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
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

  function submitForm({email, password}: LoginFormType) {
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
      <Controller
        control={control}
        name="email"
        rules={
          {
            required: 'E-mail obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'E-mail inválido',
            },
        }}
        render={({field, fieldState}) => (
          <TextInput
            value={field.value}
            errorMessage={fieldState.error?.message}
            onChangeText={field.onChange}
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />
        )}
      />
  <Controller 
    control={control}
    name="password"
    rules={
      {
        required: 'Senha obrigatória',
        minLength:{
          value: 8,
          message: 'Senha inválida',
        }
      }
    }
    render={({field, fieldState}) => (
      <PasswordInput
        value={field.value}
        errorMessage={fieldState.error?.message}
        onChangeText={field.onChange}
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's20'}}
      />
    )}
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
