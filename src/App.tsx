import { Suspense, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const Content = styled.div`
  flex: 1;
  padding: 2rem 4rem;
  width: 100%;
  background: #000000;
  position: relative;
`

function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      navigate('/basic')
    }
  }, [])

  return (
    <>
      <Sidebar />
      <Content>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Content>
    </>
  )
}

export default App
