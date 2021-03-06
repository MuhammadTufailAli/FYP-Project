import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
//Have background image with 3 buttons to go to 3 users of App
const WelcomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground
      source={require('../assets/background2.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            padding: 13,
            backgroundColor: '#1DA1F2',
            alignItems: 'center',
            // borderRadius: '50%',

            width: '55%',
            margin: 10,
          }}
          onPress={() => {
            navigation.navigate('Login', {user: 'ShopOwner'});
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#f0f0f0',
            }}>
            Login As Shop Owner{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 13,
            backgroundColor: '#1DA1F2',
            alignItems: 'center',
            // borderRadius: '50%',
            width: '55%',

            margin: 10,
          }}
          onPress={() => {
            navigation.navigate('Login', {user: 'Customer'});
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#f0f0f0',
            }}>
            Login As Customer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 13,
            margin: 10,
            backgroundColor: '#1DA1F2',
            alignItems: 'center',
            // borderRadius: '50%',

            width: '55%',
          }}
          onPress={() => {
            navigation.navigate('Login', {user: 'Mechanic'});
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#f0f0f0',
            }}>
            Login As Mechanic
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default WelcomeScreen;
