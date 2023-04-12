import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import styled from 'styled-components'
import { useEffect } from 'react'

const Content = styled.div`
  flex: 1;
  padding: 2rem 4rem;
  width: 100%;
  background: #000000;
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
        <Outlet />
      </Content>
    </>
  )
}

export default App
