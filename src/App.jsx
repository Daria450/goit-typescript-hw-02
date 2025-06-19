
import { useEffect, useState } from "react";
import './App.css'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from './components/ImageModal/ImageModal'
import Loader from './components/Loader/Loader'
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn'
import { SearchBar } from './components/SearchBar/SearchBar'
import { fetchImages } from "./services/api";
import toast, { Toaster } from "react-hot-toast";
import Modal from 'react-modal';


function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [isError, setIsError] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);


  useEffect(() => {
    const abortController = new AbortController();
    if (!query) return;

    const getImages = async () => {
      try {
        setLoading(true);
        const res = await fetchImages(query, page, abortController.signal);
        setImages(prev => [...prev, ...res.results]);
        setTotalPages(res.total_pages);
      }
      catch (error) {
        setIsError(true);
        toast.error(`${error}`);
      }
      finally { setLoading(false); };
    }
    getImages();
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  const handleChangeQuery = (newQuery) => {
    setImages([]);
    setPage(1);
    setQuery(newQuery);
  }
  const handleChangePage = () => {
    setPage(page + 1);
  }



  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleClickModal = (imgUrl) => {
    setCurrentImage(imgUrl);
    openModal();
  };

  return (
    <>
      <Toaster position="top-center" />
      <ImageModal modalIsOpen={modalIsOpen}
        closeModal={closeModal}

        currentImage={currentImage}
      />

      <SearchBar handleChangeQuery={handleChangeQuery} />
      {isError && < ErrorMessage />}
      <ImageGallery images={images} handleClickModal={handleClickModal} />
      {loading && <Loader />}
      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn handleChangePage={handleChangePage} />
      )}
    </>
  )
}

export default App
