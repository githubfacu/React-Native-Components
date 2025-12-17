import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Confirmar acción', '¿Desea continuar?', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Continuar', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Suscripción', '¿Desea suscribirse al plan?', [
      {
        text: 'Preguntarme más tarde',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Suscribirme', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <ThemedView margin>
      <SafeAreaProvider>
        <SafeAreaView className='flex-1 justify-around items-center'>
          <ThemedButton onPress={createTwoButtonAlert}>
            2-Button Alert
          </ThemedButton>
          <ThemedButton onPress={createThreeButtonAlert}>
            3-Button Alert
          </ThemedButton>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemedView>
  );
};
export default AlertsScreen;
