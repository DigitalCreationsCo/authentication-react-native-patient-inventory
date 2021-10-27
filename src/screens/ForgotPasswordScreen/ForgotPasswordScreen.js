import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { TextStyles } from '../../../assets/styles';

export default function ForgotPasswordScreen() {

  const [username, setUsername] = useState("");

  const [message, setMessage] = useState("");
  
  const navigation = useNavigation();

  const onSendPressed = () => {
    if(!username) {
      setMessage("Please provide your username.")
    } else {
      navigation.navigate("ConfirmEmailScreen");
    }
  };

  const onBackToSignInPressed = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.root}
    showsVerticalScrollIndicator="false">
      <Text style={TextStyles.title}>Reset your password</Text>

      <Text style={{width: '75%'}}>Username *</Text>
      <CustomInput 
      placeholder="Username"
      value={username} 
      setValue={setUsername} 
      />

      <Text style={TextStyles.message}>{message}</Text>

      <CustomButton text="Send" onPress={onSendPressed} />

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