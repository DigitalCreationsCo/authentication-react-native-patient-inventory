import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { TextStyles } from '../../../assets/styles';

import '../../data/patientData'

export default function AddPatientScreen() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");

  const navigation = useNavigation();

  const onAddPatientPressed = () => {
    console.warn("Add Patient");
    navigation.navigate("HomeScreen");
  }

  return (
    <View style={TextStyles.root}>
      <Text style={TextStyles.title}>Add Patient Screen</Text>

      <CustomInput 
      placeholder="First name"
      value={firstName}
      setValue={setFirstName} />
      <CustomInput 
      placeholder="Last name"
      value={lastName}
      setValue={setLastName} />
      <CustomInput 
      placeholder="Date of birth"
      value={dob}
      setValue={setDob} />
      <CustomInput 
      placeholder="Floor"
      value={floor}
      setValue={setFloor} />
      <CustomInput 
      placeholder="Room number"
      value={room}
      setValue={setRoom} />

      <CustomButton 
      onPress={onAddPatientPressed}
      text="Add Patient" />
    </View>
  )
}
