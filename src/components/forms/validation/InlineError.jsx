import styles from './inlineError.module.scss'

const InlineError = (error) => {
  return (
    <p className={styles.error}>
        {error}
    </p>
  )
}

export default InlineError
