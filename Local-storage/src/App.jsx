import React from 'react'

const App = () => {

  const user = {
    username: 'Ajay kr',
    age: 19,
    city: 'Bihar'
  }

  localStorage.setItem('user', JSON.stringify(user))

  const storedUser = JSON.parse(localStorage.getItem('user'))

  console.log(storedUser)

  return (
    <div>App</div>
  )
}

export default App