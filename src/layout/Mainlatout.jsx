//rrd import
import { Outlet } from "react-router-dom"

//components
import Navbar from "../components/Navbar"

function Mainlatout() {
  return (
    <>
     <Navbar/>
     <main>
        <Outlet />
     </main>
    </>
  )
}

export default Mainlatout