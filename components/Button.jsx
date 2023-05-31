import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import clsx from 'clsx'
import Spinner from './Spinner'

const Button = ({ large, variant, label, isLoading }) => {
  return (
    <TouchableOpacity
      className={clsx(
        `
        relative 
        rounded-md 
        w-full 
        font-sora_bold
        px-3 
        py-2 
        h-[50px] 
        flex 
        items-center 
        justify-center`,
        large && 'p-3',
        variant === 'primary' && 'bg-primary border-none',
        variant === 'secondary' && 'bg-secondary border-none',
        variant === 'outlined' &&
          'bg-transparent border-[1px] border-gray_default',
        variant === 'outlinedPrimary' && 'bg-bg_primary border-none'
      )}
    >
      {isLoading ? (
        <Spinner variant={variant} />
      ) : (
        <Text
          className={clsx(
            `
          text-sm
          text-center
          font-sora_bold
          uppercase
        `,
            (variant === 'primary' || variant === 'secondary') && 'text-white',
            (variant === 'outlined' || variant === 'outlinedPrimary') &&
              'text-primary'
          )}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default Button
