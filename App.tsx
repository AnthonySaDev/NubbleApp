import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge">Teste 2</Text>
        <Box paddingHorizontal="s20" gap="s10">
          <Button title="Login" loading  />
          <Button title="Primary" />
          <Button title="Outline" preset='outline' />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
