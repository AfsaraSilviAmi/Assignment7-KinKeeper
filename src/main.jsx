import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LayOut from './MainLayout/LayOut'
import HomePage from './Components/HomePage/HomePage'

const router = createBrowserRouter([
  {id:"root",
    path: '/',
    element:<LayOut></LayOut>,
    loader:()=> fetch("/friends.json").then((res)=>res.json()),
    children:[
      {
        index: true,
        element:<HomePage></HomePage>

      },
      {
        path:'/timeline',
        element:<div>timeline</div>
      },
      {
        path:"/stats",
        element:<div>stats</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
