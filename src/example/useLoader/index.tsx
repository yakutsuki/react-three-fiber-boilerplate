import { Canvas, useLoader } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import Polyhedron from './Polyhedron'
import * as THREE from 'three'
import Lights from './Lights'
import Floor from './Floor'

const LightsDemo = () => {
  const texture = useLoader(THREE.TextureLoader, './img/grid.png')

  return (
    <Canvas camera={{ position: [4, 4, 1.5] }} shadows>
      <Lights />
      <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={new THREE.MeshBasicMaterial({ map: texture })}
      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial({ flatShading: true })}
      />
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={
          new THREE.MeshPhongMaterial({
            flatShading: true,
            map: texture
          })
        }
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={
          new THREE.MeshStandardMaterial({
            flatShading: true,
            map: texture
          })
        }
      />
      <Floor />
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats className="stats-pos" />
    </Canvas>
  )
}

export default LightsDemo
