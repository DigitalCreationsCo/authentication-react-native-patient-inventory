import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import ClientController from '../../controller/';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { Colors, FontSizes, TextStyles } from '../../../assets/styles';

export default function SignUpScreen() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigation = useNavigation();

  const validatePassword = (password, passwordRepeat) => {
    if (!password) {
      console.warn("You provided bad password.")
    } else if (password.length < 6){
      console.warn("Password must be at least 6 characters.")
    } else if (password !== passwordRepeat) {
      console.warn("The passwords must match.")
    } else {
      return true
    }
  }

  const validateForm = (username, email, password, passwordRepeat) => {
    let result = true
    while (result == true) {
      if (username.length < 7) {
        console.warn("Your name must be at least 7 characters.");
        result = false
      }
      if (email.length < 8) {
        console.warn("Your email must be at least 8 characters.");
        result = false
      }
      if(validatePassword(password, passwordRepeat)){
        result = true
      }
    }
    return result
  }

  const onRegisterPressed = () => {
    if(validateForm(username, email, password, passwordRepeat)){
        ClientController.signUp(username, email, password, navigation);
      }
  };

  const onTermsOfUsePressed = () => {
    console.warn("Terms Of Use");
  };

  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy Policy");
  };

  const onSignInPressed = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.root}
    showsVerticalScrollIndicator="false">
        <Text style={TextStyles.title}>Create an account</Text>

        <CustomInput 
        placeholder="Username" 
        value={username} 
        setValue={setUsername} />
        <CustomInput 
        placeholder="Email" 
        value={email} 
        setValue={setEmail} />
        <CustomInput 
        placeholder="Password" 
        value={password} 
        setValue={setPassword}
        secureTextEntry />
        <CustomInput 
        placeholder="Repeat Password" 
        value={passwordRepeat} 
        setValue={setPasswordRepeat}
        secureTextEntry />

        <CustomButton text="Register" onPress={onRegisterPressed} />
        
        <Text style={styles.text}>By registering, you confirm that you accept our{' '}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>

        <SocialSignInButtons />
        
        <CustomButton
        onPress={onSignInPressed}
        text="Have an account? Sign in"
        type="TERTIARY"
        />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
})