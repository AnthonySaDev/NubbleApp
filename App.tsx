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
        <Text preset="headingLarge" bold>CoffStack</Text>
        <Box paddingHorizontal="s20" gap="s10">
        <Icon name='eyeOff' color='carrotSecondary'/>
        <Icon name='chevronRight'/>
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
