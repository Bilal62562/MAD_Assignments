import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState(null);
  const [searchedQuotes, setSearchedQuotes] = useState([]);
  const [updatedData, setUpdatedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // GET Request - Get random quote
  const getRandomQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setRandomQuote(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch random quote');
    } finally {
      setLoading(false);
    }
  };

  // POST Request - Search quotes (Quotable API uses POST for search)
  const searchQuotes = async (query) => {
    setLoading(true);
    try {
      const response = await axios.post('https://api.quotable.io/search/quotes', {
        query,
        limit: 5
      });
      setSearchedQuotes(response.data.results);
      setError(null);
    } catch (err) {
      setError('Failed to search quotes');
    } finally {
      setLoading(false);
    }
  };

  // Simulated PUT Request (since Quotable doesn't have a real PUT endpoint)
  const simulatePutRequest = async () => {
    setLoading(true);
    try {
      // This is a simulation - in a real app, you'd call an actual PUT endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockResponse = {
        status: 'success',
        message: 'Data updated successfully (simulated)',
        updatedAt: new Date().toISOString()
      };
      setUpdatedData(mockResponse);
      setError(null);
    } catch (err) {
      setError('Failed to update data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        randomQuote,
        searchedQuotes,
        updatedData,
        loading,
        error,
        getRandomQuote,
        searchQuotes,
        simulatePutRequest,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);