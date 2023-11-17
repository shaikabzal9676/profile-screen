import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import Profile from './Profile'
import Posts from './Posts'
import { User } from './dummyData'
function App() {

  return (
    <>
      <Navbar/>
      {User.map((p) => (
          <Profile key={p.id} user={p} />
        ))}
      <Posts/>
    </>
  )
}

export default App
