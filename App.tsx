import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import TextInput from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s24">
          <Text marginBottom="s8" preset="headingLarge" bold>
            Olá!
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>
          <TextInput label="E-mail" placeholder="Digite seu e-mail" boxProps={{mb:'s20'}} />
          <TextInput
            label="Senha"
            errorMessage="Senha incorreta"
            placeholder="Digite sua senha"
            boxProps={{mt:'s10'}}
            RightComponent={<Icon name="eyeOn" color="gray2" />}
          />
          <Text preset="paragraphSmall" bold mt="s10" color="primary">
            Esqueci minha senha
          </Text>

          <Button title="Entrar" mt="s48" />
          <Button title="Criar uma conta" mt="s12" preset="outline" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
