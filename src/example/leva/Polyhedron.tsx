import React, { useRef, useState } from 'react'
import { MeshProps, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Props extends MeshProps {
  polyhedron: THREE.BufferGeometry[]
  color?: string
}

const Polyhedron = ({ polyhedron, color, ...props }: Props) => {
  const ref = useRef<THREE.Mesh>(null)
  const [count, setCount] = useState(2)

  console.log(polyhedron[count].uuid)

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => {
        setCount((count + 1) % 3)
      }}
      geometry={polyhedron[count]}
    >
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  )
}

export default Polyhedron
