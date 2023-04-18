import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

// basic
const Basic = lazy(() => import('./example/basic'))
const MemoDemo = lazy(() => import('./example/useMemo'))
const SharingObjects = lazy(() => import('./example/sharingObjects'))
const Stats = lazy(() => import('./example/stats'))
const R3f = lazy(() => import('./example/r3f'))
const OrbitDemo = lazy(() => import('./example/orbitControls'))
const PointerLock = lazy(() => import('./example/pointerLockControls'))
const AxesHelper = lazy(() => import('./example/axesHelper'))
const GridHelper = lazy(() => import('./example/gridHelper'))
const Leva = lazy(() => import('./example/leva'))
const Materials = lazy(() => import('./example/materials'))
const LightsDemo = lazy(() => import('./example/lights'))
const Shadows = lazy(() => import('./example/shadows'))
const UseLoader = lazy(() => import('./example/useLoader'))
const GLTFLoaderDemo = lazy(() => import('./example/gltfLoader'))
const EnvironmentDemo = lazy(() => import('./example/environment'))
const GLTFScenes = lazy(() => import('./example/gltfScenes'))
const UseGLTFDemo = lazy(() => import('./example/useGLTF'))
const Annotations = lazy(() => import('./example/annotations'))
const GLTFJSX = lazy(() => import('./example/GLTFJSX'))
const Lerp = lazy(() => import('./example/lerp'))
const MoveDemo = lazy(() => import('./example/move'))

// advanced
const House = lazy(() => import('./case/house'))

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
      },
      {
        path: '/gridHelper',
        element: <GridHelper />
      },
      {
        path: '/leva',
        element: <Leva />
      },
      {
        path: '/materials',
        element: <Materials />
      },
      {
        path: '/lights',
        element: <LightsDemo />
      },
      {
        path: '/shadows',
        element: <Shadows />
      },
      {
        path: '/useLoader',
        element: <UseLoader />
      },
      {
        path: '/gltfLoader',
        element: <GLTFLoaderDemo />
      },
      {
        path: '/environment',
        element: <EnvironmentDemo />
      },
      {
        path: '/gltfScenes',
        element: <GLTFScenes />
      },
      {
        path: '/useGLTF',
        element: <UseGLTFDemo />
      },
      {
        path: '/annotations',
        element: <Annotations />
      },
      {
        path: '/GLTFJSX',
        element: <GLTFJSX />
      },
      {
        path: '/lerp',
        element: <Lerp />
      },
      {
        path: '/move',
        element: <MoveDemo />
      },
      {
        path: '/house',
        element: <House />
      }
    ]
  }
])

export default router
