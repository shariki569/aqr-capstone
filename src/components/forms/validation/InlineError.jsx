import styles from './InlineError.module.scss'

const InlineError = (error) => {
  return (
    <p className={styles.error}>
        {error}
    </p>
  )
}

export default InlineError
