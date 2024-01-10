import React from 'react'
import { Box } from '../Box/Box'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppTheme } from '../../hooks/useAppTheme'
import { useAppSafArea } from '../../hooks/useAppSafeArea'

interface ScreenProps {
    children: React.ReactNode
}

export default function Screen({children}: ScreenProps) {
 
    const {top} = useAppSafArea()

    return (
   <Box paddingHorizontal='s24' style={{paddingTop:top}}>
    {children}
   </Box>
  )
}