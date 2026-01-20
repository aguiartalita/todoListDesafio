import { Counter } from "./Counter"
import { Task } from "../../types/Task"
import { ClipboardText, ListDashes, X, Checks, CheckCircle, PauseCircle } from "phosphor-react"

import styles from './BoardTasks.module.css'

type TaskFilter = 'all' | 'pending' | 'completed'


interface BoardTasksProps {
  tasks: Task[]
  filter: TaskFilter
  onChangeFilter: (filter: TaskFilter) => void
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



export function BoardTasks({ tasks,filter,onChangeFilter,onToggleTask,onDeleteTask, }: BoardTasksProps) {
const filteredTasks = tasks.filter(task => {
  if (filter === 'pending') return !task.completed
  if (filter === 'completed') return task.completed
  return true
})

const orderedTasks = [...filteredTasks].sort((a, b) => {
  // Pendentes primeiro
  if (a.completed !== b.completed) {
    return a.completed ? 1 : -1
  }

  // Ambas concluídas → mais recentes primeiro
  if (a.completed && b.completed) {
    const aTime = a.completedAt ? new Date(a.completedAt).getTime() : 0
    const bTime = b.completedAt ? new Date(b.completedAt).getTime() : 0
    return bTime - aTime
  }

  return 0
})

 
  return (
    <div>
          {/* 🔹 BLOCO DE FILTROS */}
    <div className={styles.filtersWrapper}>
  <label
    className={`${styles.filterItem} ${
      filter === 'all' ? styles.activeFilter : ''
    }`}
  >
    <input
      type="radio"
      name="taskFilter"
      checked={filter === 'all'}
      onChange={() => onChangeFilter('all')}
    />
    <Checks size={20} />
    <span className={styles.filterText}>Todas</span>
  </label>

  <label
    className={`${styles.filterItem} ${
      filter === 'pending' ? styles.activeFilter : ''
    }`}
  >
    <input
      type="radio"
      name="taskFilter"
      checked={filter === 'pending'}
      onChange={() => onChangeFilter('pending')}
    />
    <CheckCircle size={20} />
    <span  className={styles.filterText}>Pendentes</span>
  </label>

  <label
    className={`${styles.filterItem} ${
      filter === 'completed' ? styles.activeFilter : ''
    }`}
  >
    <input
      type="radio"
      name="taskFilter"
      checked={filter === 'completed'}
      onChange={() => onChangeFilter('completed')}
    />
    <CheckCircle size={20} weight="fill" />
    <span className={styles.filterText}>Concluídas</span>
  </label>
</div>

    
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
          {orderedTasks.map(task => (
            <li
              key={task.id}
              className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}
            >
              {/* checkbox */}
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

              {/* título + data */}
              <span className={styles.taskTitle}>
                {task.title}
                {task.completedAt && (
                  <small className={styles.completedAt}>
                    Concluída em {formatDateTime(task.completedAt)}
                  </small>
                )}
              </span>

              {/* excluir */}
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
