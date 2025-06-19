import React from 'react'
import s from "./LoadMoreBtn.module.css"


type LoadMoreBtnProps = {
    handleChangePage: () => void;
};

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleChangePage }) => {
    return (
        <>
            <button onClick={handleChangePage} className={s.button}>Load more</button>
        </>
    )
}
