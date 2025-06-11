import React, { createContext, useState, useEffect, useContext } from 'react';
import { Accelerometer } from 'expo-sensors';

const SensorContext = createContext();

export const SensorProvider = ({ children }) => {
  const [accelerometerData, setAccelerometerData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setAccelerometerData(accelerometerData);
      })
    );
    Accelerometer.setUpdateInterval(1000); // Update every second
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  return (
    <SensorContext.Provider
      value={{
        accelerometerData,
        subscribe,
        unsubscribe,
      }}
    >
      {children}
    </SensorContext.Provider>
  );
};

export const useSensor = () => useContext(SensorContext);