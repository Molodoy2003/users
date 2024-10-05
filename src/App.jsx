import React, { useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'

function App() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)

  const fetchUsers = async name => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const data = await response.json()
      const filteredUsers = data.filter(user =>
        user.name.toLowerCase().includes(name.toLowerCase())
      )
      setUsers(filteredUsers)
      setError(filteredUsers.length === 0 ? 'Пользователи не найдены' : null)
      setHasSearched(true)
    } catch (err) {
      setError('Ошибка при получении данных')
    }
  }

  return (
    <div className='container'>
      <h1>Поиск пользователей</h1>
      <UserSearch onSearch={fetchUsers} />
      {error && <p className='error-message'>{error}</p>}
      <UserList users={users} hasSearched={hasSearched} />
    </div>
  )
}

export default App
