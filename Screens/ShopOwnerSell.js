import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
  SafeAreaView,
  Platform,
  Keyboard,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
const ShopOwnerSell = () => {
  const [images, setImages] = useState(['']);
  const [price, setprice] = useState();
  const [title, settitle] = useState();
  const [condition, setcondition] = useState();
  const [description, setdescription] = useState();
  const [location, setlocation] = useState();

  const openImagePicker = () => {
    let imageList = [];

    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
      compressImageQuality: 0.8,
      maxFiles: 10,
      mediaType: 'any',
      includeBase64: true,
    })
      .then(response => {
        response.map(image => {
          imageList.push({
            filename: image.filename,
            path: image.path,
            data: image.data,
          });
        });
        setImages(imageList);
      })
      .catch(e => console.log('error', e.message));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
            <TouchableOpacity
              onPress={openImagePicker}
              style={{
                backgroundColor: '#1DA1F2',
                padding: 40,
                alignItems: 'center',
                margin: 10,
                marginTop: 100,
              }}>
              <Text style={styles.buttonText}>+ Add image</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <FlatList
                horizontal={true}
                data={images}
                renderItem={({item}) => {
                  return (
                    <View>
                      <Image
                        source={{
                          uri: item.path,
                        }}
                        style={{width: 50, height: 50}}
                      />
                    </View>
                  );
                }}
              />
            </View>

            <TextInput
              style={styles.inputText}
              placeholder="Price"
              keyboardType={'phone-pad'}
              onChangeText={val => setprice(val)}
            />

            <TextInput
              style={styles.inputText}
              placeholder="Product Condition"
              onChangeText={val => setcondition(val)}
            />

            <TextInput
              style={styles.inputText}
              placeholder="Title"
              onChangeText={val => settitle(val)}
            />

            <TextInput
              style={styles.inputText}
              placeholder="Description"
              onChangeText={val => setdescription(val)}
            />

            <TextInput
              style={styles.inputText}
              placeholder="Location"
              onChangeText={val => setlocation(val)}
            />

            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: '#1DA1F2',
                width: '90%',
                alignItems: 'center',

                marginLeft: '5%',
                marginRight: '5%',
                marginTop: 15,
              }}
              //   onPress={() => {
              //     if (
              //       price !== '' &&
              //       title !== '' &&
              //       condition !== '' &&
              //       description !== '' &&
              //       location !== '' &&
              //       Object.keys(pickerResult).length !== 0
              //     ) {
              //       savedata();
              //       alert('Successfully Posted Ad');
              //     } else {
              //       alert('Fill All Fields');
              //     }
              //   }}
            >
              <Text style={{color: 'white', fontWeight: '500'}}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    marginTop: -100,
    flex: 1,
    justifyContent: 'space-around',
  },

  textInput: {
    height: 30,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#1DA1F2',
    padding: 40,

    alignItems: 'center',
    margin: 10,
    marginTop: 50,
  },
  inputText: {
    padding: 20,
    borderBottomWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 7,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default ShopOwnerSell;
