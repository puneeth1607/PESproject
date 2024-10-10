import React from 'react'
import Demo from './components/Demo'
import Registration from './components/Registration'
import Login from './components/Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
const App = () => {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/registration" element={<Registration/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/demo" element={<Demo/>}/>
     </Routes>
   </BrowserRouter>

  )
}

export default App
