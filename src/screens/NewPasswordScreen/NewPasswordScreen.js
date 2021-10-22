import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/core';

export default function NewPasswordScreen() {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate("HomeScreen");
  };

  const onBackToSignInPressed = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.root}
    showsVerticalScrollIndicator="false">
      <Text style={styles.title}>New password</Text>

      <Text style={{width: '75%'}}>Confirmation Code *</Text>
      <CustomInput 
      placeholder="Code"
      value={code} 
      setValue={setCode} 
      />

      <Text style={{width: '75%'}}>Password *</Text>
      <CustomInput 
      placeholder="Enter your new password"
      value={newPassword} 
      setValue={setNewPassword} 
      />

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