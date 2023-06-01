import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import clsx from 'clsx'

const Checkbox = ({ active, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={clsx(
        'w-4 h-4 rounded-[2px] border-[1.5px]  border-gray_default flex items-center justify-center',
        active && 'border-secondary'
      )}
    >
      {active && (
        <>
          <View className="w-full h-full rounded-[2px] bg-secondary absolute inset-0" />
          <AntDesign name="check" size={12} color="white" />
        </>
      )}
    </TouchableOpacity>
  )
}

export default Checkbox
