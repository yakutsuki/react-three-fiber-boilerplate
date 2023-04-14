import React, { useRef } from 'react'
import { MeshProps, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useControls } from 'leva'

const Polyhedron = (props: MeshProps) => {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.2 * delta
      ref.current.rotation.y += 0.05 * delta
    }
  })

  useControls(props.name!, {
    wireframe: {
      value: false,
      onChange: (v) => {
        ;(ref.current.material as any).wireframe = v
      }
    },
    flatShading: {
      value: true,
      onChange: (v) => {
        ;(ref.current.material as any).flatShading = v
        ;(ref.current.material as any).needsUpdate = true
      }
    },
    color: {
      value: 'lime',
      onChange: (v) => {
        ;(ref.current.material as any).color = new THREE.Color(v)
      }
    }
  })

  return (
    <mesh {...props} ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  )
}

export default Polyhedron
