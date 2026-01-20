import { Counter } from "./Counter"
import { ClipboardText, ListDashes } from "phosphor-react"

import styles from './BoardTasks.module.css'


interface Task {
  id: string
  title: string
  completed: boolean
}

interface BoardTasksProps {
  tasks: Task[]
  onToggleTask: (id: string) => void
}


export function BoardTasks({ tasks, onToggleTask }: BoardTasksProps) {
  return (
    <div>
      {/* 🔹 BLOCO DE CONTADORES */}
      <div className={styles.BoardsBox}>
        <p className={styles.fontTaskTitle}>Tarefas Criadas</p>
        <Counter value={tasks.length} />

        <p className={styles.fontTaskCompleted}>Concluídas</p>
        <Counter value={tasks.filter(task => task.completed).length} />
      </div>

      {/* 🔹 LISTA OU ESTADO VAZIO */}
      {tasks.length === 0 ? (
        <div className={styles.content}>
          {/* estado vazio */}
        </div>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map(task => (
            <li
              key={task.id}
              className={`${styles.taskItem} ${task.completed ? styles.completed : ''
                }`}
              onClick={() => onToggleTask(task.id)}
            >
              <span className={styles.checkbox}>
                {task.completed ? '✔' : ''}
              </span>

              <span className={styles.taskTitle}>
                {task.title}
              </span>
            </li>

          ))}
        </ul>
      )}
    </div>
  )
}
