import { Tabs } from 'expo-router'

export default TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="trade" />
      <Tabs.Screen name="portfolio" />
    </Tabs>
  )
}
