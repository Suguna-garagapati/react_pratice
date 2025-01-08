

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './register_login/Login'
import Register from './register_login/Register'
import DashBoard from './register_login/DashBoard'
import Page from './register_login/Page'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/DashBoard' element={<DashBoard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

