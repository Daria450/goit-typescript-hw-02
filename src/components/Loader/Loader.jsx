import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import s from './Loader.module.css'

const Loader = () => {

    return (
        <div className={s.loader} ><ClipLoader
            color={'rgb(48, 48, 172)'}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        /></div>
    )
}

export default Loader