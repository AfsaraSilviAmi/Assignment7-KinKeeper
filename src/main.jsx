import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LayOut from './MainLayout/LayOut'
import HomePage from './Components/HomePage/HomePage'
import FriendDetails from './Components/HomePage/FriendDetails'
import TimeLine from './Components/Timeline/TimeLine'
import TimelineProvider from './Components/Timeline/TimelineContext'
import ErrorPage from './Components/Error/ErrorPage'
import AnalyticsPage from './Components/Stats/AnalyticsPage'

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
        element:<TimeLine></TimeLine>
      },
      {
        path:"/stats",
        element:<AnalyticsPage></AnalyticsPage>
      },
      {
        path:"/friendDetails/:id",
        element:<FriendDetails></FriendDetails>,
        loader: () => fetch("/friends.json").then((res)=>res.json())


      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router = {router}></RouterProvider>
    </TimelineProvider>
  </StrictMode>,
)
