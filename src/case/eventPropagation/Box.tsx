import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { BoxGeometry, Color, Mesh, MeshStandardMaterial } from 'three'
import { Text } from '@react-three/drei'

const Box = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<Mesh<BoxGeometry, MeshStandardMaterial>>(null!)
  const [count, setCount] = useState(0)
  const black = new Color('black')

  console.log('Box ' + props.name + ' count=' + count)

  useEffect(() => {
    ref.current.material.color.set(0x00ff00)
  })

  useFrame(() => {
    ref.current.material.color.lerp(black, 0.1)
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={(e) => {
        //e.stopPropagation()
        setCount(count + 1)
      }}
    >
      <boxGeometry />
      <meshStandardMaterial />
      <Text fontSize={0.5} font="monospace" position-z={0.501}>
        {count}
      </Text>
      {props.children}
    </mesh>
  )
}

export default Box
