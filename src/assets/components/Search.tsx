import styles from './Search.module.css'
import { useState } from 'react'

interface SearchProps{
 onCreateTask: (title: string) => void
}

export function Search({ onCreateTask }: SearchProps) {
   const [value, setValue] = useState('')

   function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!value.trim()) return

    onCreateTask(value)
    setValue('')
  }

  return (
     <form className={styles.searchBox} onSubmit={handleSubmit}>
      <input
  type="text"
  className={styles.searchInput}
  value={value}
  onChange={e => setValue(e.target.value)}
  placeholder="Adicione uma nova tarefa"
  aria-label="Adicionar nova tarefa"
/>

    </form>
  )
}