import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import { LoginsScreen } from './src/screens/auth/LoginScreen/LoginsScreen';


function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <LoginsScreen />
    </ThemeProvider>
  );
}

export default App;
