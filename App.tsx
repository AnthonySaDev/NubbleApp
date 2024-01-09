import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import { Icon } from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal='s24'>
        <Text preset='headingLarge'>Olá!</Text>
        <Text preset='paragraphLarge' >Digite seu e-mail e senha para entrar</Text>
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
