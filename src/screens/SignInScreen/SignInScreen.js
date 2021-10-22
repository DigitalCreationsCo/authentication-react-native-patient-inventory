import React, { useState } from 'react';
import { ScrollView, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/core';

export default function SignInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");  

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    //validate user

    navigation.navigate("HomeScreen");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.root}
    showsVerticalScrollIndicator="false">
        <Image style={styles.logo, { height: height * 0.3}}
        source={Logo} 
        resizeMode="contain"
        />

        <CustomInput 
        placeholder="Username" 
        value={username} 
        setValue={setUsername} />
        <CustomInput 
        placeholder="Password" 
        value={password} 
        setValue={setPassword}
        secureTextEntry />
        
        <CustomButton
        onPress={onSignInPressed}
        text="Sign In"
        />
        <CustomButton
        onPress={onForgotPasswordPressed}
        text="Forgot password?"
        type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
        onPress={onSignUpPressed}
        text="Don't have an account? Create one"
        type="TERTIARY"
        />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    maxHeight: 300,
    width: '70%',
    maxWidth: 500,
  }
})