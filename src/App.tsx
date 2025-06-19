
import { useEffect, useState } from "react";
import './App.css'
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn'
import { SearchBar } from './components/SearchBar/SearchBar'
import { fetchImages } from "./services/api";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { ErrorMessage } from "formik";
import { UnsplashImage } from "./types";



function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);




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
      catch (error: unknown) {
        setIsError(true);

        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Unknown error occurred");
        }
      }
      finally { setLoading(false); };
    }
    getImages();
    return () => {
      abortController.abort();
    };
  }, [query, page]);





  const handleChangeQuery = (newQuery: string): void => {
    setImages([]);
    setPage(1);
    setQuery(newQuery);
  }
  const handleChangePage = (): void => {
    setPage(page + 1);
  }
  const handleClickModal = (imgUrl: string): void => {
    setCurrentImage(imgUrl);
    openModal();
  };


  function openModal(): void {
    setIsOpen(true);
  }
  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <>
      <Toaster position="top-center" />
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        currentImage={currentImage}
      />

      <SearchBar handleChangeQuery={handleChangeQuery} />
      {isError && < ErrorMessage name="query" />}
      <ImageGallery images={images} handleClickModal={handleClickModal} />
      {loading && <Loader />}
      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn handleChangePage={handleChangePage} />
      )}
    </>
  )
}

export default App
