import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React from 'react'
import Box from './Box'
import { Stats } from '@react-three/drei'
import { Vector3 } from 'three'

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

const EventPropagation = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <directionalLight position={[1, 1, 1]} />
      <Box position={[0, 1.5, 0]} name="A0">
        <Box position={[-0.66, -1, 0]} name="B0">
          <Box position={[-0.66, -1, 0]} name="C0">
            <Box position={[-0.66, -1, 0]} name="D0" />
            <Box position={[0.66, -1, 0]} name="D1" />
          </Box>
          <Box position={[0.66, -1, 0]} name="C1">
            <Box position={[0.66, -1, 0]} name="D2" />
          </Box>
        </Box>
        <Box position={[0.66, -1, 0]} name="B1">
          <Box position={[0.66, -1, 0]} name="C2">
            <Box position={[0.66, -1, 0]} name="D3" />
          </Box>
        </Box>
      </Box>
      <Rig />
      <Stats className="stats-pos" />
    </Canvas>
  )
}

export default EventPropagation
