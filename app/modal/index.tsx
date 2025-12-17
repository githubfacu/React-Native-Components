import ThemedView from '@/presentation/shared/ThemedView';
import { Link } from 'expo-router';
import { Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView margin>
      <Link asChild href='/modal/modal-window'>
        <Text className='text-light-text dark:text-dark-text underline p-2'>ModalScreen</Text>
      </Link>
    </ThemedView>
  );
};
export default ModalScreen;
