import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/core';

export default function ConfirmEmailScreen() {
  const [code, setCode] = useState("");
  
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate("HomeScreen");
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
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput 
        placeholder="Enter your confirmation code"
        value={code} 
        setValue={setCode} 
        />

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
  buttonGroup: {
    flexDirection: 'row',
  },
})