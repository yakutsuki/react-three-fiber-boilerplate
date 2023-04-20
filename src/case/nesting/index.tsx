import { Canvas } from '@react-three/fiber'
import React from 'react'
import Box from './Box'

const Nesting = () => {
  return (
    <Canvas>
      <Box position-x={-2.5}>
        <Box position-x={1.25}>
          <Box position-x={1.25}>
            <Box position-x={1.25}>
              <Box position-x={1.25} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Canvas>
  )
}

export default Nesting
