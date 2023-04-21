import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 22rem;
  background-color: #f7f7f7;
  border-right: solid 1px #e3e3e3;
  display: flex;
  flex-direction: column;

  & > * {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const BottomTitle = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 1rem 2rem;
  border-top: 1px solid #e3e3e3;
  order: 1;
  line-height: 1;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e3e3e3;
`

const Nav = styled.nav`
  flex: 1;
  overflow: auto;
  padding-top: 1rem;
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`

const Item = styled.li`
  margin: 0.25rem 0;
`
const MyLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  white-space: pre;
  padding: 0.5rem;
  margin-left: 1rem;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  gap: 1rem;

  &:hover {
    background: #e3e3e3;
  }

  &.active {
    background: hsl(224, 98%, 58%);
    color: white;
  }

  &.pending {
    color: hsl(224, 98%, 58%);
  }
`

const CustomLink = (props: NavLinkProps) => {
  const { children, to } = props
  return (
    <MyLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'active' : ''
      }
    >
      {children}
    </MyLink>
  )
}

const Sidebar = () => {
  return (
    <Container>
      <BottomTitle>React Three Fiber Tutorials</BottomTitle>
      <Title>案例</Title>
      <Nav>
        <SubTitle>基础</SubTitle>
        <List>
          <Item>
            <CustomLink to="/basic">basic</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/useMemo">use Memo</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/sharing">sharing Objects</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/stats">stats</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/r3f">R3F-Perf</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/orbit">OrbitControls</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/pointerLock">PointerLockControls</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/axesHelper">AxesHelper</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/gridHelper">GridHelper</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/leva">Leva</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/materials">Materials</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/lights">Lights</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/shadows">Shadows</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/useLoader">useLoader</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/gltfLoader">GLTFLoader</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/environment">Environment</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/gltfScenes">GLTF Scenes</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/useGLTF">useGLTF</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/annotations">annotations</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/gltfjsx">GLTFJSX</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/lerp">Lerp</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/move">Move</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/modifyGeo">Modify Geometry Attributes</CustomLink>
          </Item>
        </List>
        <SubTitle>进阶</SubTitle>
        <List>
          <Item>
            <CustomLink to="/house">House</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/nesting">Nesting Components</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/eventPropagation">Event Propagation</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/camera">Camera</CustomLink>
          </Item>
        </List>
      </Nav>
    </Container>
  )
}

export default Sidebar
