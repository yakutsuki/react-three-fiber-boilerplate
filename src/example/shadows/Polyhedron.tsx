import React, { useRef } from 'react'
import { MeshProps, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Polyhedron = (props: MeshProps) => {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.2 * delta
      ref.current.rotation.y += 0.05 * delta
    }
  })

  return (
    <mesh {...props} ref={ref} castShadow receiveShadow>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  )
}

export default Polyhedron
