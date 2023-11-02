"use client";
import React, { useEffect, useState } from 'react'
import InlineError from '../validation/InlineError'
import styles from './textInput.module.scss'

const TextInput = ({ label, width, type, value, onChange, placeholder, min, max, containerClass, name, error }) => {

    const [localValue, setLocalValue] = useState(value);
    const [localError, setLocalError] = useState(error);
    const [inputClassname, setInputClassname] = useState(styles.input);

    useEffect(() => {
        // Update local state when the value prop changes
        setLocalValue(value);
    }, [value]);

    const inputStyle = {
        width: width ? `${width}%` : "auto",
    }

    useEffect(() => {
        // Update local state when the error prop changes
        setLocalError(error);

        error ? setInputClassname(`${styles.input} ${styles.errorInput}`) : setInputClassname(styles.input);

    }, [error]);


    const handleChange = (e) => {
        // Clear the local error when the input value changes
        if (localError) {
            setLocalError("");
        }
        setInputClassname(styles.input);
        setLocalValue(e.target.value);
        onChange(e);
    };

    return (
        <div className={styles.container}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                className={inputClassname}
                type={type}
                value={localValue}
                key={error}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                min={min}
                maxLength={max}
                style={inputStyle}
            />

            {localError && <InlineError error={localError} />}
        </div>
    )
}

export default TextInput
