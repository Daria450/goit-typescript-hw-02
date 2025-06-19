import React from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css'
import { TbBorderRadius } from 'react-icons/tb';

const ImageModal = ({ modalIsOpen, closeModal, currentImage }) => {

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "transparent",
            padding: "0",
            border: "0",
            maxHeight: "fit-content",
            maxWidth: "fit-content",
            borderRadius: "0px",
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
    };
    Modal.setAppElement(document.getElementById("root"));

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                {currentImage && <img src={currentImage} alt="Selected" className={s.img} />}
            </Modal></>
    )
}

export default ImageModal