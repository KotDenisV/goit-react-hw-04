import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import requestImage from './api';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  // const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      if (query) {
        try {
          const response = await requestImage(query, page);          
          setImages(response.results);          
        } catch (error) {
          console.log(error);
        }
      }  
    };
    fetchImage();
  }, [query, page]);

  const handleSetQuery = newQuery => {
    setQuery(newQuery);
    setPage(1);
    };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      {query.length > 0 && <ImageGallery images={images} />}
    </>
  )
}

export default App
