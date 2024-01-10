import React, { Children } from 'react'
import { Box } from '../Box/Box'

interface ScreenProps {
    children: React.ReactNode
}

export default function Screen({children}: ScreenProps) {
  return (
   <Box paddingHorizontal='s24'>
    {children}
   </Box>
  )
}