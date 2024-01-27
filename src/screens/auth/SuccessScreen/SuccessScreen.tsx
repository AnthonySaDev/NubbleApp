import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@routes'
import { Button, Icon, Screen, Text } from '@components'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({ navigation, route }: ScreenProps) {
  function goBackToBegin() {
    //TODO: navegar para a tela de Login
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24" bold>
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button title="Voltar ao início" mt="s40" onPress={goBackToBegin} />
    </Screen>
  );
}
