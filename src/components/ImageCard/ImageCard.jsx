import React from 'react'
import s from './ImageCard.module.css'
const ImageCard = ({ alt_description, urls, handleClickModal }) => {
    return (
        <>
            <div className={s.li} onClick={() => handleClickModal(urls.regular)}>
                <img className={s.img} src={urls.small} alt={alt_description} />
            </div>
        </>
    )
}

export default ImageCard