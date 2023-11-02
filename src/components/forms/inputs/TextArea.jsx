
"use client";
import React, { useState, useEffect } from 'react'
import InlineError from '../validation/InlineError'
import styles from './textArea.module.scss'

const TextArea = ({ label, value, onChange, placeholder, rows, cols, error, onKeyUp, disabled, onKeyDown }) => {

    const [localValue, setLocalValue] = useState(value);
    const [localError, setLocalError] = useState(error);
    // const [inputClassname, setInputClassname] = useState(styles.textAreaInput);

    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    // useEffect(() => {
    //     setLocalError(error);
    //     error ? setInputClassname(`${styles.textAreaInput}  ${styles.textAreaInputError }`) : setInputClassname(styles.textAreaInput);
    // }, [error])

    const handleChange = (e) => {
        // Clear the local error when the input value changes
        if (localError) {
            setLocalError("");
        }
        setInputClassname(styles.textAreaInput);
        setLocalValue(e.target.value);
        onChange(e);
    };

    return (
        <div className={styles.container}>
            <div className={styles.textArea}>
                {label && <label className={styles.label}>{label}</label>}
                <textarea
                    className={styles.textAreaInput}
                    value={localValue}
                    onChange={handleChange}
                    placeholder={placeholder}
                    rows={rows}
                    cols={cols}
                    onKeyUp={onKeyUp}
                    onKeyDown={onKeyDown}
                    disabled={disabled}
                />
                {localError && <InlineError error={localError} />}
            </div>
        </div>
    )
}

export default TextArea