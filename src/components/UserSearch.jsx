import React, { useState } from 'react'

function UserSearch({ onSearch }) {
  const [inputValue, setInputValue] = useState('')

  const handleSearch = () => {
    onSearch(inputValue)
    setInputValue('')
  }

  return (
    <div className='input-group'>
      <input
        type='text'
        placeholder='Введите имя пользователя'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Поиск</button>
    </div>
  )
}

export default UserSearch
