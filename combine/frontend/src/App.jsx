import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import ClassBased from './pages/ClassBased'

const App=()=> {
 return(
  <>
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/class' element={<ClassBased/>}/>
    </Routes>
  </>
 )
}

export default App
