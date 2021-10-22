import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/core';

export default function ForgotPasswordScreen() {
  const [username, setUsername] = useState("");
  
  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate("NewPasswordScreen");
  };

  const onBackToSignInPressed = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.root}
    showsVerticalScrollIndicator="false">
      <Text style={styles.title}>Reset your password</Text>

      <Text style={{width: '75%'}}>Username *</Text>
      <CustomInput 
      placeholder="Username"
      value={username} 
      setValue={setUsername} 
      />

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 20,
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