import React, { useState, useContext } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { useApi } from '../context/ApiContext';

const ApiScreen = () => {
  const {
    randomQuote,
    searchedQuotes,
    updatedData,
    loading,
    error,
    getRandomQuote,
    searchQuotes,
    simulatePutRequest,
  } = useApi();
  
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>API Integration Demo</Text>

      {/* GET Request Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>GET Random Quote</Text>
        <Button title="Get Random Quote" onPress={getRandomQuote} />
        {loading && randomQuote === null ? (
          <ActivityIndicator size="small" />
        ) : randomQuote ? (
          <View style={styles.quoteContainer}>
            <Text style={styles.quoteText}>"{randomQuote.content}"</Text>
            <Text style={styles.quoteAuthor}>- {randomQuote.author}</Text>
          </View>
        ) : null}
      </View>

      {/* POST Request Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>POST Search Quotes</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter search term"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button
          title="Search Quotes"
          onPress={() => searchQuotes(searchQuery)}
          disabled={!searchQuery.trim()}
        />
        {loading && searchedQuotes.length === 0 ? (
          <ActivityIndicator size="small" />
        ) : searchedQuotes.length > 0 ? (
          <View>
            {searchedQuotes.map((quote, index) => (
              <View key={index} style={styles.quoteContainer}>
                <Text style={styles.quoteText}>"{quote.content}"</Text>
                <Text style={styles.quoteAuthor}>- {quote.author}</Text>
              </View>
            ))}
          </View>
        ) : null}
      </View>

      {/* PUT Request Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PUT Update Data</Text>
        <Button title="Simulate PUT Request" onPress={simulatePutRequest} />
        {loading && !updatedData ? (
          <ActivityIndicator size="small" />
        ) : updatedData ? (
          <View style={styles.updatedDataContainer}>
            <Text>Status: {updatedData.status}</Text>
            <Text>Message: {updatedData.message}</Text>
            <Text>Updated At: {updatedData.updatedAt}</Text>
          </View>
        ) : null}
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  quoteContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  quoteText: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  quoteAuthor: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  updatedDataContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e6f7ff',
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ApiScreen;