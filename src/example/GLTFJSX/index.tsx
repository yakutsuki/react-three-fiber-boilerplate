import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Shoe'

const GLTFJSX = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 1.66] }}>
      <Environment preset="forest" />
      <Model />
      <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
      <OrbitControls autoRotate />
    </Canvas>
  )
}

export default GLTFJSX
