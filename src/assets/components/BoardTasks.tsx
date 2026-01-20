import { Counter } from "./Counter"
import { Task } from "../../types/Task"
import { ClipboardText, ListDashes, X } from "phosphor-react"

import styles from './BoardTasks.module.css'

interface BoardTasksProps {
  tasks: Task[]
  onToggleTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

function formatDateTime(isoDate: string) {
  return new Date(isoDate).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}



export function BoardTasks({ tasks, onToggleTask, onDeleteTask }: BoardTasksProps) {
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
          <ListDashes size={56} color="#f2f2f2" />
          <div className={styles.fontTextContent400}>
            <p>Você ainda não tem tarefas cadastradas.</p>
            <p className={styles.fontTextContent700}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map(task => (
            <li
              key={task.id}
              className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}
            >

              <span
                className={styles.checkbox}
                role="checkbox"
                aria-checked={task.completed}
                tabIndex={0}
                onClick={() => onToggleTask(task.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onToggleTask(task.id)
                  }
                }}
              >
                {task.completed ? '✔' : ''}
              </span>

              <span className={styles.taskTitle}>
                {task.title}


                {task.completedAt && (
                  <small className={styles.completedAt}>
                   ­ Concluída em {formatDateTime(task.completedAt)}
                  </small>
                )}
              </span>

              <button
                className={styles.deleteButton}
                title="Excluir tarefa"
                aria-label={`Remover tarefa: ${task.title}`}
                onClick={(e) => {
                  e.stopPropagation()
                  onDeleteTask(task.id)
                }}
              >
                <X size={16} weight="bold" />
              </button>

            </li>

          ))}
        </ul>
      )}
    </div>
  )
}
