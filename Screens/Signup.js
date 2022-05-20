import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';
import {auth, provider, db} from '../firebase/firebase';

function SignUp({navigation, route}) {
  const user = route.params.user;
  console.log(user);
  const [firstname, setfirstname] = React.useState('');
  const [lastname, setlastname] = React.useState('');
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [confirmpassword, setconfirmpassword] = React.useState('');

  const handleSignUp = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(async userCredential => {
        alert('Succesfull');

        await db
          .collection(user)
          .doc(email)
          .set({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
          })
          .then(() => console.log('done with signup'))
          .catch(error => {
            console.error('Error writing document: ', error);
          });
      })
      .catch(error => alert(error.message));
  };

  return (
    <View>
      <View style={{alignItems: 'center', marginTop: 50}}>
        {/* <Icon
          style={{margin: 10, justifyContent: 'center', color: '#1DA1F2'}}
          name="car"
          size={25}
        /> */}
        <Text style={{fontSize: 20, fontWeight: '700', marginTop: 40}}>
          SignUp {user}
        </Text>
      </View>

      <TextInput
        style={styles.inputText}
        placeholder="First Name"
        onChangeText={value => setfirstname(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Last Name"
        onChangeText={value => setlastname(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Email E.g name@account.com"
        onChangeText={value => setemail(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Password must be greater than 6 letters"
        onChangeText={value => setpassword(value)}
      />

      <TextInput
        style={styles.inputText}
        placeholder="Confirmed Password"
        onChangeText={value => setconfirmpassword(value)}
      />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: '#1DA1F2',
            width: '90%',
            alignItems: 'center',
            // borderRadius: '50%',
            marginTop: 10,
          }}
          onPress={() => {
            if (
              firstname != '' &&
              lastname != '' &&
              email != '' &&
              password != '' &&
              confirmpassword != ''
            ) {
              if (password.length > 6) {
                if (password == confirmpassword) {
                  handleSignUp();
                } else {
                  alert('Confirm password does not match');
                }
              } else {
                alert('Password must be greater than 6');
              }
            } else {
              alert('Enter all Fields');
            }
          }}>
          <Text style={{color: 'white', fontWeight: '500'}}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
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

export default SignUp;
