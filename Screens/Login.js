import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {auth, db} from '../firebase/firebase';
//It take user name from Welcome screen So that whether it is shopowner or Client and check their Account from database using If and else if statement
//SignIn have alert if user input wrong ID/Pass
//It send id,user,firstname,lastname to next dashboard. Id of the person which logged in

const SignIn = ({navigation, route}) => {
  const user = route.params.user;

  const [email, setemail] = React.useState();
  const [password, setpassword] = React.useState();

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        if (user === 'ShopOwner') {
          db.collection(user)
            .doc(email)
            .get()
            .then(doc => {
              console.log(doc.data());
              if (doc.exists) {
                navigation.navigate('ShopOwnerInterface', {user: 'ShopOwner'});
              } else {
                alert('Invalid Email or password');
              }
            });
        } else if (user === 'Customer') {
          db.collection(user)
            .doc(email)
            .get()
            .then(doc => {
              if (doc.exists) {
                navigation.navigate('CustomerInterface', {user: 'Customer'});
              } else {
                alert('Invalid Email or password');
              }
            });
        } else if (user === 'Mechanic') {
          db.collection(user)
            .doc(email)
            .get()
            .then(doc => {
              if (doc.exists) {
                navigation.navigate('MechanicInterface', {user: 'Mechanic'});
              } else {
                alert('Invalid Email or password');
              }
            });
        } else {
          alert('Invalid Email or password');
        }
      })
      .catch(error => {
        alert('Invalid Email or password');
      });
  };

  return (
    <View>
      <View style={{alignItems: 'center', marginTop: 50}}>
        {/* <Icon
          style={{margin: 10, justifyContent: 'center', color: '#1DA1F2'}}
          name="car"
          size={25}
        /> */}
        <Text style={{fontSize: 20, fontWeight: '800', marginTop: 40}}>
          {user} Login
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Email"
          value={email}
          onChangeText={value => setemail(value)}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.inputText}
          placeholder="Enter Password"
          value={password}
          onChangeText={value => setpassword(value)}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: '#1DA1F2',
            width: '90%',
            alignItems: 'center',
            // borderRadius: '50%',
            margin: 10,
          }}
          onPress={() => {
            handleLogin();
          }}>
          <Text style={{color: 'white', fontWeight: '500'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert('Under Development');
          }}>
          <Text style={{color: '#1DA1F2'}}>Forgetten Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp', {user: user});
          }}>
          <Text>
            {'\n'} Don't have an account?
            <Text style={{color: '#1DA1F2'}}> SignUp</Text>{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputText: {
    padding: 15,
    borderBottomWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
});

export default SignIn;
