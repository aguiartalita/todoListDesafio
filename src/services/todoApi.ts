import { Task } from '../types/Task'

export async function fetchInitialTasks(): Promise<Task[]> {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10'
  )

  if (!res.ok) {
    throw new Error('Erro ao buscar tarefas')
  }

  const data = await res.json()

  return data.map((item: any) => ({
    id: String(item.id),
    title: item.title,
    completed: item.completed,
  }))
}
