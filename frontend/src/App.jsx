import React from 'react'
import './App.css'
import '../index.css'
import RegisterPage from './components/RegisterPage'
import RoomsAndDining from './components/RoomsAndDining'
import LoginPage from './components/LoginPage'
import ApiPage from './components/ApiPage'



function App() {


  return (
    <>
      <button className="btn btn-primary">Test Bootstrap Button</button>
      <RoomsAndDining/>
      <LoginPage/>
      <ApiPage/>

    </>
  )
}

export default App
