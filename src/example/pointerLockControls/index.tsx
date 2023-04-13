import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PointerLockControls, Stats } from '@react-three/drei'
import styled from 'styled-components'

interface InstructionsProps {
  show: boolean
}

const Instructions = styled.div<InstructionsProps>`
  background-color: rgba(0, 0, 0, 0.5);
  top: 50%;
  left: 50%;
  height: 70px;
  width: 200px;
  margin-top: -35px;
  margin-left: -100px;
  position: absolute;
  font-size: 24px;
  font-family: monospace;
  color: white;
  text-align: center;
  pointer-events: none;
  transition: opacity 1s linear;
  opacity: ${(props) => (props.show ? 1 : 0)};
`

const Button = styled.button`
  font-size: 24px;
  pointer-events: auto;
`

const PointerLock = () => {
  const [showInstructions, setShowInstructions] = useState(true)

  function pointerlockchange() {
    console.log('pointerlockchange')

    setShowInstructions(!showInstructions)
  }

  useEffect(() => {
    document.addEventListener('pointerlockchange', pointerlockchange, false)
    return () => {
      document.removeEventListener(
        'pointerlockchange',
        pointerlockchange,
        false
      )
    }
  })

  return (
    <>
      <Canvas>
        <mesh>
          <boxGeometry args={[100, 10, 100, 100, 10, 100]} />
          <meshBasicMaterial wireframe color={'lime'} />
        </mesh>
        <PointerLockControls selector="#button" />
        <Stats className="stats-pos" />
      </Canvas>
      <Instructions show={showInstructions}>
        Instructions
        <Button id="button">Click To Enter</Button>
      </Instructions>
    </>
  )
}

export default PointerLock
