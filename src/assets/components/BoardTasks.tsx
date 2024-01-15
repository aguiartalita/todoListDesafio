import { Counter } from "./Counter"
import { ClipboardText, ListDashes } from "phosphor-react"

import styles from './BoardTasks.module.css'

export function BoardTasks() {
  return (
    <div>
      <div className={styles.BoardsBox}>
        <p className={styles.fontTaskTitle}> Tarefas Criadas  </p>
        <Counter />
        <p className={styles.fontTaskCompleted}> Concluídas </p>
        <Counter />
      </div>
      <div className={styles.content}>
        <ListDashes size={56} color="#f2f2f2" />
        <p className={styles.fontTextContent400}> Você ainda não tem tarefas cadastradas.
          <br/>
            <p className={styles.fontTextContent700}>Crie tarefas e organize seus itens a fazer</p>
          </p>
        </div>
    </div>
  )
}