import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Analytics from './Dashboard/Analytics'
import History from './Dashboard/History'
import Tracker from './Dashboard/Tracker'
import Dashboard from './Dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/tracker' element={<Tracker/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default AllRoutes