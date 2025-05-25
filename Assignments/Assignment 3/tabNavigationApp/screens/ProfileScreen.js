import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function ProfileScreen({ userName, setUserName }) {
  const [name, setName] = useState(userName);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: name });
    setUserName(name);
  }, [name]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit your name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5 }
});