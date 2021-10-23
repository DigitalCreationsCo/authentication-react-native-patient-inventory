import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PatientList from '../../components/PatientList';
import CustomButton from '../../components/CustomButton';

export default function HomeScreen() {
  const onAddPatientPressed = () => {
    console.warn("Add Patient")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient List</Text>
      <PatientList />
      <CustomButton 
      onPress={onAddPatientPressed}
      text="Add a Patient" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    marginVertical: 20,
  },
})