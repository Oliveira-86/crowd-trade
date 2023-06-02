import { Tabs } from 'expo-router'

export default TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Trade" />
      <Tabs.Screen name="Portfolio" />
    </Tabs>
  )
}
