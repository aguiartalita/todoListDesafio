import styles from './Search.module.css'

export function Search() {
  return (
    <div className={styles.searchBox}>
      <input type="Text" className={styles.searchInput} />
    </div>
  )
}