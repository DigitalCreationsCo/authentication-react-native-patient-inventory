import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import ClientController from '../../controller/';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { TextStyles } from '../../../assets/styles';

export default function SignUpScreen() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [message, setMessage] = useState("")

  const navigation = useNavigation();

  const validateForm = (username, email, password, passwordRepeat) => {
    if (!username || username.length < 7) {
      setMessage("Username must be at least 7 characters.");
    } else if (!email || email.length < 8) {
      setMessage("Your email must be at least 8 characters.")
    } else if (!password || password.length < 6) {
      setMessage("Password must be at least 6 characters.")
    } else if (password !== passwordRepeat) {
      setMessage("The passwords must match.")
    } else {
      return true
    }
  }

  const onRegisterPressed = () => {
    if(validateForm(username, email, password, passwordRepeat)){
      ClientController.signUp(username, email, password, navigation, setMessage);
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

        <Text style={TextStyles.message}>{message}</Text>

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