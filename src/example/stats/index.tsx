import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import Polyhedron from './Polyhedron'
import * as THREE from 'three'

const SharingObjects = () => {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.735898),
    new THREE.DodecahedronGeometry(0.735898)
  ]

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
      <Stats className="stats-pos" />
    </Canvas>
  )
}

export default SharingObjects
