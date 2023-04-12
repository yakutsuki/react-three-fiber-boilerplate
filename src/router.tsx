import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

const Basic = lazy(() => import('./example/basic'))
const MemoDemo = lazy(() => import('./example/useMemo'))
const SharingObjects = lazy(() => import('./example/sharingObjects'))
const Stats = lazy(() => import('./example/stats'))
const R3f = lazy(() => import('./example/r3f'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/basic',
        element: <Basic />
      },
      {
        path: '/useMemo',
        element: <MemoDemo />
      },
      {
        path: '/sharing',
        element: <SharingObjects />
      },
      {
        path: '/stats',
        element: <Stats />
      },
      {
        path: '/r3f',
        element: <R3f />
      }
    ]
  }
])

export default router
