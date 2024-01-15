
import './global.css'

import styles from './App.module.css'
import { Header } from './assets/components/Header'
import { Search } from './assets/components/Search'
import { BoardTasks } from './assets/components/BoardTasks'

export function App() {

  return (
      <div>
        <Header />
      <div>
        <Search />
      
      </div>
        <BoardTasks/>
      </div>
     
   
  )
}

export default App
