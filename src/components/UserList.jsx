import React from 'react'
import User from './User'

function UserList({ users, hasSearched }) {
  return (
    <div className='user-list'>
      {hasSearched ? (
        users.length > 0 ? (
          users.map(user => <User key={user.id} user={user} />)
        ) : (
          <p>Пользователи не найдены</p>
        )
      ) : (
        <p style={{ color: 'white' }}>
          Введите имя пользователя и нажмите "Поиск".
        </p>
      )}
    </div>
  )
}

export default UserList
