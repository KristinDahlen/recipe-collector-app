import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen'

import { TokenProvider } from './context/LoginContext';
import apiHandler from './api/handler';

const Stack = createNativeStackNavigator();

const credentials = { email: '', password: '' } //TODO get from config

export default App = () => {
  const login = async () => {
    if (token) {
      //check if still valid via /me route
      const now = new Date(Date.now());
      console.log(now.toString(), '- Token is valid');
      return;
    }
    const t = await apiHandler.login(credentials);
    setToken(t);
  }

  const [token, setToken] = useState();
  useEffect(login);

  return (
    <TokenProvider value={token}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TokenProvider>
  );
};