//rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom"

//layouts
import Mainlatout from "./layout/Mainlatout"

//pages
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlatout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/quiz/:title',
          element:<Quiz/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App