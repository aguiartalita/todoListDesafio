
import './global.css'

import styles from './App.module.css'
import { Header } from './assets/components/Header'
import { Search } from './assets/components/Search'
import { BoardTasks } from './assets/components/BoardTasks'
import { useState } from 'react'



interface Task {
  id: string
  title: string
  completed: boolean
}


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
        ? { ...task, completed: !task.completed }
        : task
    )
  )
}

  
  return (
      <div>
        <Header />
      <div>
        <Search onCreateTask={handleCreateTask} />
      
      </div>
        <BoardTasks tasks={tasks} onToggleTask={handleToggleTask} />
      </div>
     
   
  )
}

export default App
