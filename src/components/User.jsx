import React from 'react'

function User({ user }) {
  return (
    <div className='user'>
      <h3 style={{ color: 'white' }}>{user.name}</h3>
      <p style={{ color: 'white' }}>Email: {user.email}</p>
    </div>
  )
}

export default User
