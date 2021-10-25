import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { Colors, FontSizes, TextStyles } from '../../../assets/styles';

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
      <Text style={TextStyles.title}>New password</Text>

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
})