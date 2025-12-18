import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/hooks/use-color-scheme';

import { useThemeColor } from '@/hooks/use-theme-color';

import { Stack } from 'expo-router';

import { allRoutes } from '@/constants/Routes';
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';
import "../global.css";

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background')
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1}}
    >
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor
            },
            headerStyle: {
              backgroundColor: backgroundColor
            }
          }}
        >
          <Stack.Screen
            name='index'
            options={{
              title: ''
            }}
          />
          {
            allRoutes.map((route) => (
            <Stack.Screen
              key={ route.name }
              name={ route.name }
              options={{
                title: route.title,
                headerShown: route.headerShown
              }}
            />
            ))
          }
        </Stack>
        <StatusBar style="auto" />
      </ThemeChangerProvider>      
    </GestureHandlerRootView>

  );
}
