import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/signUp">Go to Sign Up</Link>
    </View>
  )
}

export default SignIn
