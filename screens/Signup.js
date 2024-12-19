import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

const SignUp = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/backgroundFood2.jpg')} style={styles.background}>
    <View style={styles.container}>
    <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>SignUp</Text>
      <TextInput style={styles.input} placeholder="First Name" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.signupButtonText}>SignUp</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 150,  
    height: 150,
    alignSelf: 'center',  
    marginBottom: 20,  
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  signupButton: {
    backgroundColor: 'blue', 
    paddingVertical: 12, 
    paddingHorizontal: 32, 
    borderRadius: 25, 
    alignItems: 'center', 
    marginBottom: 20, 
  },
  signupButtonText: {
    color: "white", 
    fontSize: 18, 
    backgroundColor: "blue",
    textAlign: "center",
    borderRadius: 20,
  },
});

export default SignUp;
