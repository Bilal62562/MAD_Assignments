import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApiProvider } from './context/ApiContext';
import { SensorProvider } from './context/SensorContext';
import ApiScreen from './screens/ApiScreen';
import SensorScreen from './screens/SensorScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ApiProvider>
      <SensorProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="API Demo" component={ApiScreen} />
            <Tab.Screen name="Sensor Data" component={SensorScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SensorProvider>
    </ApiProvider>
  );
}