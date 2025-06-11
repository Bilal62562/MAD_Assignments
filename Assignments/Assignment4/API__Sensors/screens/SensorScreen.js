import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSensor } from '../context/SensorContext';

const SensorScreen = () => {
  const { accelerometerData } = useSensor();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accelerometer Data</Text>
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>X: {accelerometerData.x.toFixed(2)}</Text>
        <Text style={styles.dataText}>Y: {accelerometerData.y.toFixed(2)}</Text>
        <Text style={styles.dataText}>Z: {accelerometerData.z.toFixed(2)}</Text>
      </View>
      <Text style={styles.note}>
        Move your device to see the accelerometer values change
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  dataContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 20,
  },
  dataText: {
    fontSize: 18,
    marginVertical: 5,
  },
  note: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SensorScreen;