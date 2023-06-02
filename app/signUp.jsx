import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router'
import Input from '../components/Input'
import Button from '../components/Button'
import Checkbox from './components/Checkbox'
import { onValidateEmail, onValidatePassword } from '../lib/validation'

const SignUp = () => {
  const [isActive, setIsActive] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [hasPasswordError, setHasPasswordError] = useState('')
  const [hasEmailError, setHasEmailError] = useState('')

  const router = useRouter()

  const onEmailText = (text) => {
    setEmail(text)
    const res = onValidateEmail(text)
    if (res.error) {
      setHasEmailError(res.message)
      return
    }
    setHasEmailError('')
  }

  const onPasswordText = (text) => {
    setPassword(text)
    const res = onValidatePassword(text)
    if (res.error) {
      setHasPasswordError(res.message)
      return
    }
    setHasPasswordError(false)
  }

  const onSubmit = () => {
    router.push({
      pathname: '/signIn',
      params: { emailParams: email, name: `${firstName} ${lastName}` },
    })
  }

  return (
    <View className="flex-1 bg-white flex items-center py-5 px-5">
      <Text className="font-sora_bold text-lg mb-8">Create your account</Text>
      <Input
        label="First Name"
        isLoading
        size="small"
        onChangeText={(text) => setFirstName(text)}
      />
      <Input
        label="Last Name"
        isLoading
        size="small"
        onChangeText={(text) => setLastName(text)}
        style={{ marginVertical: 20 }}
      />
      <Input
        label="E-mail"
        isLoading
        size="small"
        onChangeText={onEmailText}
        errorMessage={hasEmailError}
      />
      <Input
        value={password}
        label="Password"
        size="small"
        style={{ marginTop: 22, marginBottom: 37 }}
        placeholder="Minimum 8 characters"
        onChangeText={onPasswordText}
        errorMessage={hasPasswordError}
        eyes
      />
      <Button
        label="entrar"
        variant="primary"
        disabled={
          hasEmailError || password.length < 8 || !lastName || !firstName
        }
        onPress={onSubmit}
      />
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
