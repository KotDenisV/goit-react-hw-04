import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import requestImage from './api';
import toast, { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (!query) return;
        setLoading(true);
        setError(null);
        try {
          const response = await requestImage(query, page);          
          setImages(prevImages => (page === 1 ? response.results : [...prevImages, ...response.results]));         
        } catch (error) {
          setError('Something went wrong!');
        } finally {
        setLoading(false);
        }
    };
    fetchImage();
  }, [query, page]);
  
  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <Toaster />
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </>
  )
}

export default App
