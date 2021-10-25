import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { Colors, FontSizes, TextStyles } from '../../../assets/styles';

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
      <Text style={TextStyles.title}>Reset your password</Text>

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
})