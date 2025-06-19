import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import s from './ImageGallery.module.css'

const ImageGallery = ({ images, handleClickModal }) => {
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