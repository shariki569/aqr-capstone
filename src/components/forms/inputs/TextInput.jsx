"use client";
import React, { useEffect, useState } from 'react'
import InlineError from '../validation/InlineError'
import styles from './textInput.module.scss'

const TextInput = ({ label, width, type, value, onChange, placeholder, min, max, name, error }) => {

    const [localValue, setLocalValue] = useState(value);
    const [localError, setLocalError] = useState(error);
    const [inputClassName, setInputClassName] = useState(styles.input);

    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    useEffect(() => {
        setLocalError(error);
        error ? setInputClassName(`${styles.input} ${styles.errorInput}`) : setInputClassName(styles.input);
    }, [error]);

    const handleChange = (e) => {
        if (localError) {
            setLocalError("");
        }
        setInputClassName(styles.input);
        setLocalValue(e.target.value);

        if (typeof onChange === 'function') {
            onChange(e);
        }
    };

    return (
        <div className={styles.container}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                className={inputClassName}
                type={type}
                value={localValue}
                key={error}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                min={min}
                maxLength={max}
            />
            {localError && <InlineError error={localError} />}
        </div>
    )
}

export default TextInput
