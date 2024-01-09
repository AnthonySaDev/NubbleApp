import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { theme } from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
    <SafeAreaView>
      <Text preset='headingLarge' >Teste 2</Text>
      <Button title='Login' />
    </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;