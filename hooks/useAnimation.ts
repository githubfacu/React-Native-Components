import { useRef } from 'react';
import { Animated, Easing, type EasingFunction } from 'react-native';

interface AnimationProps{
    toValue?: number
    duration?: number
    useNativeDriver?: boolean
    easing?: EasingFunction
    callback?: () => void
}

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current
  const animatedTop = useRef(new Animated.Value(0)).current
  const animatedX = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    toValue = 1,
    duration = 300,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {}
  }: AnimationProps) => {
    animatedX.setValue(0)
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing
    }).start(callback)
  }

  const fadeOut = ({
    toValue = 0,
    duration = 300,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {}
  }: AnimationProps) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing
    }).start(callback)
  }

  const startMovingTopPosition = ({
    toValue = 0,
    duration = 700,
    useNativeDriver = true,
    easing = Easing.bounce,
    callback = () => {}
  }: AnimationProps) => {
    animatedTop.setValue(-100)
    Animated.timing(animatedTop,{
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing
    }).start(callback)    
  }

  const freeFall = () => {
    animatedTop.setValue(-100)
    animatedX.setValue(-50)
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start()

    Animated.parallel([
      Animated.timing(animatedTop,{
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
        easing: Easing.bounce
      }),
      Animated.timing(animatedX,{
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      })
    ]).start()
  }
  return {
    animatedOpacity,
    animatedTop,
    animatedX,

    fadeIn,
    fadeOut,
    freeFall,
    startMovingTopPosition
  }
}
