import React from 'react'
import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/signUp">go to sign up</Link>
    </View>
  )
}

export default SignIn
