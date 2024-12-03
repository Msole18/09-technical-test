import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'
import UsersList from './components/UsersList'


function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColor, setShowColor] = useState(false)

  const handleToggleColors = () => {
    setShowColor(!showColor)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results)
        // originalUsers.current = res.results
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div className="App">
      <header>
        <button onClick={handleToggleColors}>Changes color</button>
      </header>
      <main>
        <UsersList users={users} showColor={showColor} />
      </main>
    </div>
  )
}

export default App
