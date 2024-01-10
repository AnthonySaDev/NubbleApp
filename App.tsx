import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {LoginsScreen} from './src/screens/auth/LoginScreen/LoginsScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SignUpScreen from './src/screens/auth/SignUpScreen/SignUpScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <LoginsScreen /> */}
        <SignUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
