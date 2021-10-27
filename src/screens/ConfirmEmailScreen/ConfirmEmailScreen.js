import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { TextStyles } from '../../../assets/styles';

export default function ConfirmEmailScreen() {

  const [code, setCode] = useState("");
  
  const [message, setMessage] = useState("");

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    if(!code) {
      setMessage("Enter your confirmation code.")
    } else {
      navigation.navigate("NewPasswordScreen");
    }
  };

  const onResendCodePressed = () => {
    console.warn("Resend code");
  };

  const onBackToSignInPressed = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.root}
    showsVerticalScrollIndicator="false">
        <Text style={TextStyles.title}>Confirm your email</Text>
        <Text style={{ width: '75%' }}>A confirmation code has been sent to your email address.</Text>
        <CustomInput 
        placeholder="Enter your confirmation code"
        value={code} 
        setValue={setCode} 
        />

        <Text style={TextStyles.message}>{message}</Text>

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
        onPress={onResendCodePressed}
        text="Resend Code"
        type="SECONDARY"
        />
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