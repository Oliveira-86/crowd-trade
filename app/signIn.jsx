import React from 'react'
import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const SignIn = () => {
  return (
    <View className="flex-1 flex items-center justify-center">
      <Text className="text-primary">SignIn</Text>
      <Link href="/signUp">go to sign up</Link>
    </View>
  )
}

export default SignIn
