import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import LoginScreen from '../screens/LogIn';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}
      <AuthStack />
    </NavigationContainer>
  );
};
