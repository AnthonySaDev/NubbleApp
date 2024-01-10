import React from 'react'
import Screen from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Icon } from '../../../components/Icon/Icon'
import { Button } from '../../../components/Button/Button'

export default function SignUpScreen() {
  
    function submitForm(){
        //TODO: implementar
        console.log('submit form')
    }
  
    return (
   <Screen canGoBack scrollable>
    <Text preset='headingLarge' bold mb='s32'>Criar uma conta</Text>
    <TextInput boxProps={{mb:"s20"}}  label='Seu username' placeholder='@'/>
    <TextInput boxProps={{mb:"s20"}}  label='Nome completo' placeholder='Digite seu nome completo'/>
    <TextInput boxProps={{mb:"s20"}}  label='E-mail' placeholder='Digite seu e-mail'/>
    <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
        RightComponent={<Icon name="eyeOn" color="gray2" />}
      />
      <Button title='Criar uma conta' onPress={() => submitForm()}/>
   </Screen>
  )
}