import React from 'react';
import {SafeAreaView} from 'react-native';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import Screen from '../../../components/Screen/Screen';

export function LoginsScreen() {
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
      <TextInput
        label="Senha"
        errorMessage="Senha incorreta"
        placeholder="Digite sua senha"
        boxProps={{mt: 's10'}}
        RightComponent={<Icon name="eyeOn" color="gray2" />}
      />
      <Text preset="paragraphSmall" bold mt="s10" color="primary">
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mt="s48" />
      <Button title="Criar uma conta" mt="s12" preset="outline" />
    </Screen>
  );
}
