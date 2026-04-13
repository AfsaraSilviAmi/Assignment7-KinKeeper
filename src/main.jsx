import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LayOut from './MainLayout/LayOut'
import HomePage from './Components/HomePage/HomePage'
import FriendDetails from './Components/HomePage/FriendDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element:<LayOut></LayOut>,
    
    children:[
      {
        index: true,
        element:<HomePage></HomePage>,
        
        

      },
      {
        path:'/timeline',
        element:<div>timeline</div>
      },
      {
        path:"/stats",
        element:<div>stats</div>
      },
      {
        path:"/friendDetails/:id",
        element:<FriendDetails></FriendDetails>,
        loader: () => fetch("/friends.json").then((res)=>res.json())


      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
