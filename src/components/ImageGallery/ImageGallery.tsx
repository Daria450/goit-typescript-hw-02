import React, { FC } from 'react'
import ImageCard from '../ImageCard/ImageCard'
import s from './ImageGallery.module.css'
import { UnsplashImage } from '../../types';


interface ImageGalleryProps {
    images: UnsplashImage[];
    handleClickModal: (imgUrl: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, handleClickModal }) => {
    return (
        <>
            {images.length > 0 && (
                <ul className={s.ul}>
                    {images.map(({ id, alt_description, urls }) => (
                        <li key={id}>
                            <ImageCard urls={urls} alt_description={alt_description} handleClickModal={handleClickModal} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default ImageGallery