import { Tabs } from 'expo-router'

import HomeIcon from '../../assets/icons/home.svg'
import { Foundation, Ionicons, Feather } from '@expo/vector-icons'

export default TabLayout = () => {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          title: '',
          tabBarActiveTintColor: '#770FDF',
          tabBarInactiveTintColor: '#000',
          tabBarIcon: ({ focused }) => (
            <Foundation
              name="home"
              size={24}
              color={focused ? '#770FDF' : 'black'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Trade"
        options={{
          tabBarLabel: 'Trade',
          title: '',
          tabBarActiveTintColor: '#770FDF',
          tabBarInactiveTintColor: '#000',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-swap-horizontal"
              size={24}
              color={focused ? '#770FDF' : 'black'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Portfolio"
        options={{
          tabBarLabel: 'Portfolio',
          title: '',
          tabBarActiveTintColor: '#770FDF',
          tabBarInactiveTintColor: '#000',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="pie-chart"
              size={24}
              color={focused ? '#770FDF' : 'black'}
            />
          ),
        }}
      />
    </Tabs>
  )
}
