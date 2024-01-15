import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {TouchableOpacityBox} from '../../../components/Box/Box';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginsScreen({navigation}: ScreenProps) {
  function navigateToSingUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge" bold>
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mt: 's10'}}
      />
      <TouchableOpacityBox
        onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text preset="paragraphSmall" bold mt="s10" color="primary">
          Esqueci minha senha
        </Text>
      </TouchableOpacityBox>
      <Button title="Entrar" mt="s48" />
      <Button
        title="Criar uma conta"
        mt="s12"
        preset="outline"
        onPress={navigateToSingUpScreen}
      />
    </Screen>
  );
}
