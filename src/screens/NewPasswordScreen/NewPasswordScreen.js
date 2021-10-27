import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { TextStyles } from '../../../assets/styles';

export default function NewPasswordScreen() {
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [message, setMessage] = useState("");
  
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    if (!password || password.length < 6) {
      setMessage("Password must be at least 6 characters.")
    } else if (password !== passwordRepeat) {
      setMessage("The passwords must match.")
    } else {
      navigation.navigate("HomeScreen");
    }
    
  };

  const onBackToSignInPressed = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.root}
    showsVerticalScrollIndicator="false">
      <Text style={TextStyles.title}>New password</Text>
      <Text style={{width: '75%'}}>Enter your new password</Text>

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

      <Text styles={TextStyles.message}>{message}</Text>
      
      <CustomButton text="Submit" onPress={onSubmitPressed} />

      <CustomButton
      onPress={onBackToSignInPressed}
      text="Back to Sign In"
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
})