import { Redirect } from 'expo-router'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import { View } from 'react-native'

const StartPage = () => {
  const [fontsLoaded] = useFonts({
    'Sora-Bold': require('../assets/fonts/Sora-Bold.ttf'),
    'Sora-Regular': require('../assets/fonts/Sora-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return (
    <View onLayout={onLayoutRootView}>
      <Redirect href="/signIn" />
    </View>
  )
}

export default StartPage
