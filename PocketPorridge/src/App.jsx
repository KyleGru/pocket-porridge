// @TODO: Usually to rip out commented out code rather than leave commented out when committing
// You can use git to get the code back if you really need it
import { Outlet } from 'react-router-dom'
import './App.css'
import { PorridgeNavbar } from './Components/PorridgeNavbar'

function App() {
  return (
    <>
    <PorridgeNavbar />
    <Outlet/>
    </>
  )
}



export default App
