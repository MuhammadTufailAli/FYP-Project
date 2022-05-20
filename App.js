import React from 'react';
import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/Login';
import SignupScreen from './Screens/Signup';
import ShopOwnerInterface from './Screens/ShopOwnerInterface';
import CustomerInterface from './Screens/CustomerInterface';
import MechanicInterface from './Screens/MechanicInterface';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {db, auth} from './firebase/firebase.js';

const Stack = createNativeStackNavigator();
import firestore from '@react-native-firebase/firestore';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen
          name="ShopOwnerInterface"
          component={ShopOwnerInterface}
        />
        <Stack.Screen name="CustomerInterface" component={CustomerInterface} />
        <Stack.Screen name="MechanicInterface" component={MechanicInterface} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputText: {
    padding: 15,
    borderBottomWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 7,
  },
});
