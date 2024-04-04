// import { useState } from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { PorridgeNavbar } from './Components/PorridgeNavbar'

function App() {
  return (
    <>
    <PorridgeNavbar />
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}



export default App
