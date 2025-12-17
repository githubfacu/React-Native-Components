import { useAnimation } from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { Animated } from 'react-native';

const Animation101Screen = () => {

  const { animatedOpacity, animatedTop, animatedX, fadeIn, fadeOut, startMovingTopPosition} = useAnimation()

  return (
    <ThemedView margin
      className='justify-center items-center flex-1'
    >

      <Animated.View
        className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [
            { translateY: animatedTop },
            { translateX: animatedX },
          ]
        }}
      >
        <Ionicons name='airplane-outline' size={50} className='m-auto' color='white' />
      </Animated.View>

      <ThemedButton
        className='my-4'
        onPress={() => {
          fadeIn({})
          startMovingTopPosition({})
        }}
      >FadeIn</ThemedButton>
      <ThemedButton
        onPress={ () => fadeOut({}) }
      >FadeOut</ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
