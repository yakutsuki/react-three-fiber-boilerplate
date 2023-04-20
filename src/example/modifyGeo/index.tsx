import { OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { useMemo } from 'react'
import { BufferGeometry, DoubleSide, Vector3 } from 'three'

const Polyhedron = () => {
  const geometry = useMemo(() => {
    let g = new BufferGeometry()
    const points = [
      new Vector3(-1, 1, -1), //c
      new Vector3(-1, -1, 1), //b
      new Vector3(1, 1, 1), //a

      new Vector3(1, 1, 1), //a
      new Vector3(1, -1, -1), //d
      new Vector3(-1, 1, -1), //c

      new Vector3(-1, -1, 1), //b
      new Vector3(1, -1, -1), //d
      new Vector3(1, 1, 1), //a

      new Vector3(-1, 1, -1), //c
      new Vector3(1, -1, -1), //d
      new Vector3(-1, -1, 1) //b
    ]
    g.setFromPoints(points)
    g.computeVertexNormals()
    return g
  }, [])

  useControls({
    x: {
      value: (geometry.attributes.position as THREE.BufferAttribute).array[4],
      min: -1,
      max: 2,
      step: 0.1,
      onChange: (e) => {
        ;(geometry.attributes.position as any).array[4] = e
        geometry.attributes.position.needsUpdate = true
      }
    }
  })

  return (
    <mesh geometry={geometry}>
      <meshNormalMaterial side={DoubleSide} />
    </mesh>
  )
}

const ModifyGeometry = () => {
  return (
    <Canvas camera={{ position: [1, 1, 3] }}>
      <Polyhedron />
      <OrbitControls />
      <Stats className="stats-pos" />
    </Canvas>
  )
}

export default ModifyGeometry
