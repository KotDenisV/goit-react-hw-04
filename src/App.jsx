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
          setError('Failed to fetch images');
        } finally {
        setLoading(false);
        }
    };
    fetchImage();
  }, [query, page]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuery = e.target.elements[0].value.trim();
    if (!newQuery) {
      toast.error('Please enter a value to search for!');
    } else {
      setQuery(newQuery);
      setPage(1);
    }
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
      <SearchBar onSubmit={handleSubmit} />
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
