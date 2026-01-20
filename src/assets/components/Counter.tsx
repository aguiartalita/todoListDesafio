import styles from './Counter.module.css'

interface CounterProps {
  value: number
}

export function Counter({value}: CounterProps) {
  
  return (
    <div className={styles.counter}>
      <p className={styles.fontCounter}>{value}</p>
    </div>
  )
}