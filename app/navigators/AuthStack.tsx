import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/Onboarding';
import LoginScreen from '../screens/LogIn';
import RegisterScreen from '../screens/Register';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
