import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {LoginsScreen} from './src/screens/auth/LoginScreen/LoginsScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <LoginsScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
