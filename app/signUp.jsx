import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import Input from '../components/Input'
import Button from '../components/Button'
import Checkbox from './components/Checkbox'

const SignUp = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <View className="flex-1 bg-white flex items-center py-5 px-5">
      <Text className="font-sora_bold text-lg mb-8">Create your account</Text>
      <Input label="First Name" isLoading size="small" />
      <Input
        label="Last Name"
        isLoading
        size="small"
        style={{ marginVertical: 20 }}
      />
      <Input label="E-mail" isLoading size="small" />
      <Input
        label="Password"
        size="small"
        style={{ marginTop: 20, marginBottom: 37 }}
        placeholder="Minimum 8 characters"
        eyes
      />
      <Button label="entrar" variant="primary" />
      <View className="flex flex-row w-full mt-5 mb-7">
        <Checkbox
          active={isActive}
          onPress={() => setIsActive((state) => !state)}
        />
        <Text className="ml-2 font-sora text-gray_default text-xs">
          I am over 18 years of age and I have read and agree to the{' '}
          <Text className="text-black">Terms of Service</Text> and{' '}
          <Text className="text-black"> Privacy policy</Text>.
        </Text>
      </View>
      <View className="flex flex-row items-center gap-1 mt-1 text-gray_default">
        <Text className="text-gray_default">Already have an account?</Text>
        <Link href="/signIn">
          <Text className="underline">Login in here</Text>
        </Link>
      </View>
    </View>
  )
}

export default SignUp
