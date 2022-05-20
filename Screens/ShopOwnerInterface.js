import React from 'react';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {auth, provider, db} from '../firebase/firebase';

import Home from './ShopOwnerHome';
import Sell from './ShopOwnerSell';
import Profile from './ShopOwnerProfile';
import EditProfile from './ShopOwnerEditProfile';
const Tab = createBottomTabNavigator();

function ShopOwnerInterface({navigation, route}) {
  const user = route.params.user;
  console.log('User is ' + auth.currentUser?.email);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Entypo name={'home'} size={size} color={color} />;
          } else if (route.name === 'Edit Profile') {
            return <Ionicons name={'settings'} size={size} color={color} />;
          } else if (route.name === 'SELL') {
            return <FontAwesome name="plus-circle" size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return <FontAwesome name="user" size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="SELL"
        component={Sell}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{unmountOnBlur: true}}
      />
    </Tab.Navigator>
  );
}

export default ShopOwnerInterface;
