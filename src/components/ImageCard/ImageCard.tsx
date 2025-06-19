import React, { FC } from 'react'
import s from './ImageCard.module.css'
import { UnsplashImage } from '../../types';

interface ImageCardProps {
    alt_description: string | undefined;
    urls: {
        small: string;
        regular: string;
    };
    handleClickModal: (imgUrl: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ alt_description, urls, handleClickModal }) => {
    return (
        <>
            <div className={s.li} onClick={() => handleClickModal(urls.regular)}>
                <img className={s.img} src={urls.small} alt={alt_description} />
            </div>
        </>
    )
}

export default ImageCard