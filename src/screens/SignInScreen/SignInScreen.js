import React, { useState } from 'react';
import { ScrollView, Image, Text, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import ClientController from '../../controller/';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import Logo from '../../../assets/images/Logo.png';
import { TextStyles } from '../../../assets/styles';

export default function SignInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const [auth, setAuth] = useState("");
  const [user, setUser] = useState("");

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    //validate user
    //need global state for storing auth token and user data
    ClientController.signIn(username,password, navigation);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUpScreen");
  };

  const inputIsEmpty = (value) => {
    return value.length > 0 ? false : true
  };

  return (
    <ScrollView contentContainerStyle={[TextStyles.root, { justifyContent: 'center' }]}
    showsVerticalScrollIndicator="false">
        <Image style={TextStyles.logo, { height: height * 0.3}}
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
        
        <Text style={TextStyles.message}>{message}</Text>

        <CustomButton
        onPress={onSignInPressed}
        text="Sign In"
        disabled={inputIsEmpty(username)}
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