import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import RootLayout from './RootLayout/RootLayout'
import HomePage from './pages/homePage/HomePage'
import FriendDetails from './pages/detailsPage/friendDetails'
import FriendsContextProvider from './context/FriendsContextProvider'
import TimelinePage from './pages/timeline/TimelinePage'
import StatusPage from './pages/status/StatusPage'
import ErrorPage from './pages/errorPage/ErrorPage'


const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/timeline',
        element: <TimelinePage />
      },
      {
        path: '/status',
        element: <StatusPage></StatusPage>
      },
      {
        path: '/friendDetails/:id',
        Component: FriendDetails
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </FriendsContextProvider>
  </StrictMode>,
)
