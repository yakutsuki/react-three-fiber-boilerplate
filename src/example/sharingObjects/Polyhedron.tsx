import React, { useRef, useState } from 'react'
import { MeshProps, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Props extends MeshProps {
  polyhedron: THREE.BufferGeometry[]
}

const Polyhedron = ({ position, polyhedron }: Props) => {
  const ref = useRef<THREE.Mesh>(null)
  const [count, setCount] = useState(0)

  console.log(polyhedron)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta
      ref.current.rotation.y += 0.5 * delta
    }
  })

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerDown={() => setCount((count + 1) % 3)}
      geometry={polyhedron[count]}
    >
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  )
}

export default Polyhedron
