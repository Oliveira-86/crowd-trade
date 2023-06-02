import { Stack } from 'expo-router'

export default layout = () => {
  return (
    <Stack>
      <Stack.Screen name="signIn" options={{ title: '' }} />
      <Stack.Screen name="signUp" options={{ title: '' }} />
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  )
}
