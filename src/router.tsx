import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

const Basic = lazy(() => import('./example/basic'))
const MemoDemo = lazy(() => import('./example/useMemo'))
const SharingObjects = lazy(() => import('./example/sharingObjects'))
const Stats = lazy(() => import('./example/stats'))
const R3f = lazy(() => import('./example/r3f'))
const OrbitDemo = lazy(() => import('./example/orbitControls'))
const PointerLock = lazy(() => import('./example/pointerLockControls'))
const AxesHelper = lazy(() => import('./example/axesHelper'))

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
      },
      {
        path: '/orbit',
        element: <OrbitDemo />
      },
      {
        path: '/pointerLock',
        element: <PointerLock />
      },
      {
        path: '/axesHelper',
        element: <AxesHelper />
      }
    ]
  }
])

export default router
