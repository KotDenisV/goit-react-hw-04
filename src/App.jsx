import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('cat');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImage() {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: "cat",
          page,
          per_page: 12,
          client_id: "yp0qqG1aUtOWCHddGzSiyiPKlLSMQikoo_jpK367IU4",          
        },
      });
      setQuery(response.data.hits);  
    }

    fetchImage();
  }, []);

  const handleSetQuery = query => {
    setQuery(query);
    };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      <ImageGallery />
    </>
  )
}

export default App
