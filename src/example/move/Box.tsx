import { MeshProps, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { Mesh } from 'three'

interface BoxProps extends MeshProps {
  selected?: boolean
  keyMap: Record<string, boolean>
}

const Box = (props: BoxProps) => {
  const ref = useRef<Mesh>(null!)
  const keyMap = props.keyMap
  const [selected, setSelected] = useState(props.selected)

  useFrame((_, delta) => {
    keyMap['KeyA'] && selected && (ref.current.position.x -= 1 * delta)
    keyMap['KeyD'] && selected && (ref.current.position.x += 1 * delta)
    keyMap['KeyW'] && selected && (ref.current.position.z -= 1 * delta)
    keyMap['KeyS'] && selected && (ref.current.position.z += 1 * delta)
  })

  return (
    <mesh {...props} ref={ref} onPointerDown={() => setSelected(!selected)}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={!selected} />
    </mesh>
  )
}

export default Box
