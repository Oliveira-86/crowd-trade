import React, { useCallback, useState } from 'react'
import { Link, useRouter } from 'expo-router'
import { View, Text, ToastAndroid } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import { onValidateEmail, onValidatePassword } from '../lib/validation'
import { useSearchParams } from 'expo-router'

const SignIn = () => {
  const { name, emailParams } = useSearchParams()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState(emailParams)
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

  const onSubmitSignIn = () => {
    router.push('/tabs')
  }
  return (
    <View className="flex-1 bg-white flex items-center py-5 px-5">
      <Text className="font-sora_bold text-lg mb-8">Login</Text>
      <Input
        value={emailParams ? emailParams : email}
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
        onPress={onSubmitSignIn}
        disabled={hasEmailError || password.length < 8}
      />
      <View className="flex flex-row items-center gap-1 mt-1 text-gray_default">
        <Text className="text-gray_default">Don’t have an account?</Text>
        <Link href="/signUp">
          <Text className="underline">Sign up here</Text>
        </Link>
      </View>
    </View>
  )
}

export default SignIn
