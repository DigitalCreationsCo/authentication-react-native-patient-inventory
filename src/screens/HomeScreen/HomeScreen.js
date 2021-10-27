import React from 'react';
import { View, Text } from 'react-native';

import CustomButton from '../../components/CustomButton';
import PatientList from '../../components/PatientList';

import { TextStyles } from '../../../assets/styles';
import { useNavigation } from '@react-navigation/core';



export default function HomeScreen() {
  
  const navigation = useNavigation();

  const onAddPatientPressed = () => {
    navigation.navigate("AddPatientScreen");
  }

  return (
    <View style={TextStyles.root}>
      <Text style={TextStyles.title}>Patient List</Text>
      
      <PatientList />
      <CustomButton 
      onPress={onAddPatientPressed}
      text="Add a Patient" />
    </View>
  )
}