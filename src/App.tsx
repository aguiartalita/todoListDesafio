
import './global.css'

import styles from './App.module.css'
import { Header } from './assets/components/Header'
import { Search } from './assets/components/Search'
import { BoardTasks } from './assets/components/BoardTasks'
import { useState, useEffect } from 'react'
import { Task } from './types/Task'



export function App() {

const [tasks, setTasks] = useState<Task[]>([])

function handleCreateTask(title: string) {
  if (!title.trim()) return

  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    completed: false,
  }

  setTasks(prev => [...prev, newTask])
}

function handleToggleTask(id: string) {
  setTasks(prev =>
    prev.map(task =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
            completedAt: !task.completed
              ? new Date().toISOString()
              : undefined,
          }
        : task
    )
  )
}


function handleDeleteTask(id: string) {
  setTasks(prev => prev.filter(task => task.id !== id))
}

  useEffect(() => {
  const storedTasks = localStorage.getItem('tasks')

  if (storedTasks) {
    setTasks(JSON.parse(storedTasks))
  }
}, [])

useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])


  return (
      <div>
        <Header />
      <div>
        <Search onCreateTask={handleCreateTask} />
      
      </div>
       <BoardTasks
  tasks={tasks}
  onToggleTask={handleToggleTask}
  onDeleteTask={handleDeleteTask}
/>

      </div>
     
   
  )
}

export default App
