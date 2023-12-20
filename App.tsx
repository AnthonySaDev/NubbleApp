import React from 'react';
import { SafeAreaView } from 'react-native';

import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset='headingLarge' >Teste 2</Text>
      <Text preset='paragraphCaption' >Teste 4</Text>
    </SafeAreaView>
  );
}

export default App;