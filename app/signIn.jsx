import React from 'react'
import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'

const SignIn = () => {
  return (
    <View className="flex-1 bg-white flex items-center py-5 px-5">
      <Text className="font-sora_bold text-lg mb-8">Login</Text>
      <Input label="E-mail" isLoading size="small" />
      <Input
        label="Password"
        size="small"
        style={{ marginTop: 20, marginBottom: 37 }}
        placeholder="Minimum 8 characters"
        eyes
      />
      <Button label="entrar" variant="primary" />
    </View>
  )
}

export default SignIn
