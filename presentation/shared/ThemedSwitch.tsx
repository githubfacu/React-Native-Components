import { useThemeColor } from '@/hooks/use-theme-color'
import React from 'react'
import { Platform, Pressable, Switch } from 'react-native'
import ThemedText from './ThemedText'

interface Props{
    text: string
    value: boolean
    className?: string
    onValueChange: (value: boolean) => void
}

const isAndroid = Platform.OS === 'android'

const ThemedSwitch = ({
    text,
    value,
    className,
    onValueChange
}: Props) => {
    const switchActiveColor = useThemeColor({}, 'primary')
  return (
    <Pressable
        onPress={ () => onValueChange(!value)}
        className={`flex flex-row justify-between items-center px-2 ${className}`}
    >
        <ThemedText type='normal' className='text-xl'>{ text }</ThemedText>
        <Switch
            // trackColor={{false: '#767577', true: '#81b0ff'}}
            // thumbColor={ isAndroid ? switchActiveColor : ''}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={ onValueChange }
            value={ value }
            className='scale-125'
        />
    </Pressable>

  )
}

export default ThemedSwitch