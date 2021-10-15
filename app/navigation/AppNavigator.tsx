import React, { useEffect } from 'react'
import { Platform, StatusBar, StyleSheet } from 'react-native'
import Home from '../screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationScreens } from '../constants/NavigationScreens'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Details from '../screens/Details'

export type RootStackParamList = {
  Home: undefined,
  Details: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

function AppNavigator() {

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={NavigationScreens.Home}
            component={Home}
            options={{
              headerShown: true,
              headerTitleAlign: 'left'
            }}
          />
          <Stack.Screen
            name={NavigationScreens.Details}
            component={Details}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontSize: 18,
  },
})

export default AppNavigator
