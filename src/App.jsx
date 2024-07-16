import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [query, setQuery] = useState('');

  const handleSetQuery = query => {
    setQuery(query);
    };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
    </>
  )
}

export default App
