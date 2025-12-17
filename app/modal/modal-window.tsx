import ThemedButton from '@/presentation/shared/ThemedButton'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemedView from '@/presentation/shared/ThemedView'
import { router } from 'expo-router'
import React from 'react'

const ModalWindow = () => {
  return (
    <ThemedView className='justify-center items-center max-h-80 mt-auto' bgColor='grey'>
      <ThemedText>modal-window</ThemedText>
      <ThemedButton
        onPress={ () => router.dismiss() }
      >Cerrar</ThemedButton>
    </ThemedView>
  )
}

export default ModalWindow