import styles from './Counter.module.css'

export function Counter() {
  
  return (
    <div  className={styles.counter}>
      <p
     className={styles.fontCounter}
      > 0 </p>
    </div>
  )
}