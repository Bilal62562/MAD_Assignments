

import  { useState } from 'react';
import {View,Text,TextInput,SectionList,TouchableOpacity,Modal,StyleSheet} from 'react-native';

const contacts = [
  { name: 'Bilal', phone: '1234567890', group: 'Family' },
  { name: 'Subhaan', phone: '9876543210', group: 'Friends' },
  { name: 'abc', phone: '5551112222', group: 'Work' },
  { name: 'Abdullah', phone: '4443332211', group: 'Family' },
  { name: 'Uzair', phone: '7778889999', group: 'Friends' },
  { name: 'example', phone: '1112223333', group: 'Work' },
  { name: 'Aaqib', phone: '2223334444', group: 'Friends' },
];

// Group contacts by group name
const groupContacts = (filteredContacts) => {
  const groups = ['Family', 'Friends', 'Work'];
  return groups.map(group => ({
    title: group,
    data: filteredContacts.filter(contact => contact.group === group),
  }));
};

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
    contact.phone.includes(searchText)
  );

  const groupedData = groupContacts(filtered);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <TextInput
        style={styles.input}
        placeholder="Search by name or phone"
        value={searchText}
        onChangeText={setSearchText}
      />

      <SectionList
        sections={groupedData}
        keyExtractor={(item, index) => item.phone + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setSelectedContact(item);
              setModalVisible(true);
            }}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
      <Modal
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Contact Details</Text>
            <Text style={styles.modalText}>Name: {selectedContact?.name}</Text>
            <Text style={styles.modalText}>Phone: {selectedContact?.phone}</Text>
            <Text style={styles.modalText}>Group: {selectedContact?.group}</Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: '#fff' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#f0f4f8', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#2c3e50',
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 12,
    marginBottom: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dcdde1',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#dfe6e9',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 16,
    borderRadius: 6,
    color: '#2d3436',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 14,
    marginVertical: 4,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2c3e50',
  },
  phone: {
    fontSize: 14,
    color: '#636e72',
    marginTop: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0984e3',
  },
  modalText: {
    fontSize: 16,
    color: '#2d3436',
    marginBottom: 6,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#0984e3',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
});
