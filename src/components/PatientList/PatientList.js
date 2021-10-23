import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import PatientComponent from '../PatientComponent';
import patientData from '../../data/patientData';

export default function PatientList() {
  const [patientList, setPatientList] = useState(patientData);

  const renderPatientComponent = ({ item }) => 
    <PatientComponent patient={item}/>;

  return (
    <FlatList
    style={{width: '100%'}}
    data={patientList}
    renderItem={renderPatientComponent}
    keyExtractor={item => item.id}
    />
  )
}
