import React, { FC } from 'react'
import { IoIosSearch } from "react-icons/io";
import s from "./SearchBar.module.css"
import { Field, Form, Formik, FormikHelpers } from 'formik';
import toast from "react-hot-toast";

interface SearchBarProps {
    handleChangeQuery: (newQuery: string) => void;
}

interface SearchFormValues {
    query: string;
}

export const SearchBar: FC<SearchBarProps> = ({ handleChangeQuery }) => {
    const initialValues = {
        query: '',
    };
    const handleSubmit = (values: SearchFormValues,
        options: FormikHelpers<SearchFormValues>) => {
        handleChangeQuery(values.query);
        if (!values.query.trim()) {
            toast.error("The field cannot be empty");
        };
        options.resetForm();
    }


    return (
        <header >
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form className={s.form}>
                    <label className={s.label} htmlFor="query">
                        <button className={s.button} type='submit'><IoIosSearch /></button>
                        <Field className={s.input} type="text" name="query" placeholder='Search images and photos'
                        />
                    </label>
                </Form>
            </Formik>

        </header>
    )
}
