import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import RootLayout from './RootLayout/RootLayout'
import HomePage from './pages/homePage/HomePage'

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
        element: <h1>This is Timeline Page</h1>
      },
      {
        path: '/status',
        element: <h1>This is Status Page</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
