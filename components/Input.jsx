import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import Spinner from './Spinner'

const Input = (
  {
    label,
    eyes,
    size,
    isLoading,
    errorMessage,
    style,
    placeholder,
    onChangeText,
    onFocus,
    onBlur,
  },
  props
) => {
  const [isSecureEntry, setIsSecureEntry] = useState(props.isSecureEntry)

  useEffect(() => {
    setIsSecureEntry(props.isSecureEntry)
  }, [props.isSecureEntry])

  return (
    <View className="w-full" style={style}>
      <Text className="font-sora w-full text-xs decoration-0 mb-1 text-gray_default">
        {label}
      </Text>
      <View className="w-full rounded-md bg-gray_light h-[50px]">
        <TextInput
          {...props}
          className="py-2 px-3 text-base font-sora text-gray_default"
          secureTextEntry={isSecureEntry}
          onFocus={onFocus}
          placeholderTextColor="#CFCFCF"
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
        />

        {eyes && (
          <View className="absolute right-4 top-4">
            <TouchableOpacity onPress={() => setIsSecureEntry(!isSecureEntry)}>
              {!isSecureEntry ? (
                <Feather name="eye-off" size={20} color="#A0A0A0" />
              ) : (
                <Feather name="eye" size={20} color="#A0A0A0" />
              )}
            </TouchableOpacity>
            {isLoading && (
              <View className="absolute right-[15px] left-[15px] ">
                <Spinner size={size} />
              </View>
            )}
          </View>
        )}
        {errorMessage && (
          <Text className="absolute bottom-[-17] w-full text-red-600 text-xs">
            {errorMessage}
          </Text>
        )}
      </View>
    </View>
  )
}

export default Input
