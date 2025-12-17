import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import MenuItem from '@/presentation/menu/MenuItem'
import ThemedView from '@/presentation/shared/ThemedView'
import React from 'react'
import { View } from 'react-native'

const index = () => {
  return (
    <ThemedView margin>
        {
            animationMenuRoutes.map((route, index) => (
                <MenuItem 
                    key={ route.name }
                    title={ route.title }
                    name={ route.name }
                    icon={ route.icon }
                    isFirst={ index === 0}
                    isLast={ index === animationMenuRoutes.length -1 }
                />
            ))
        }
        <View className='my-3'></View>
        {
            uiMenuRoutes.map((route, index) => (
                <MenuItem 
                    key={ route.name }
                    title={ route.title }
                    name={ route.name }
                    icon={ route.icon }
                    isFirst={ index === 0}
                    isLast={ index === animationMenuRoutes.length -1 }
                />
            ))
        }
        <View className='my-3'></View>
            {
                menuRoutes.map((route, index) => (
                    <MenuItem 
                        key={ route.name }
                        title={ route.title }
                        name={ route.name }
                        icon={ route.icon }
                        isFirst={ index === 0}
                        isLast={ index === animationMenuRoutes.length -1 }
                    />
                ))
            }
    </ThemedView>
  )
}

export default index