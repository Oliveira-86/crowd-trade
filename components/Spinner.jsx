import React, { useEffect } from 'react'
import { Animated, View } from 'react-native'
import clsx from 'clsx'

const Spinner = ({ variant, size }) => {
  const spinnerAnimationInitial = new Animated.Value(0)
  const spinnerAnimationFinish = new Animated.Value(1)

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinnerAnimationInitial, {
        toValue: spinnerAnimationFinish,
        duration: 800,
        friction: 1,
        useNativeDriver: true,
        isInteraction: false,
      })
    ).start()
  }, [spinnerAnimationInitial, spinnerAnimationFinish])

  const interpolateSpinner = spinnerAnimationInitial.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  const animatedStyle = { transform: [{ rotate: interpolateSpinner }] }

  return (
    <Animated.View
      style={[animatedStyle]}
      className={clsx(
        'animate-spin w-7 h-7 rounded-full border-[3.5px] border-primary border-t-white',
        size === 'small' && 'w-6 h-6 border-[2.5px]',
        variant === 'reverse' && 'border-gray_default border-t-primary',
        variant === 'outlined' &&
          'absolute top-[30%] left-[50%] border-primary border-b-white',
        variant === 'primary' && 'absolute top-[30%] left-[50%] border-b-white'
      )}
    />
  )
}

export default Spinner
