import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/backgroundFood.jpg')} style={styles.background}>
    <View style={styles.container}>
    <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.registerText} onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? Register
      </Text>
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
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  loginButton: {
    backgroundColor: 'blue', 
    paddingVertical: 12, 
    paddingHorizontal: 32, 
    borderRadius: 25, 
    alignItems: 'center', 
    marginBottom: 20, 
  },
  loginButtonText: {
    color: 'white', 
    fontSize: 18, 
  },
  registerText: {
    textAlign: 'center',
    marginTop: 12,
    color: 'blue',
  },
});

export default Login;
