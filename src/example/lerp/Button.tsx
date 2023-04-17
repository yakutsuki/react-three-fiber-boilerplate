import { MeshProps, useFrame } from '@react-three/fiber'
import React, { useMemo, useRef, useState } from 'react'
import { Mesh, Color, MathUtils, MeshPhysicalMaterial } from 'three'

function lerp(x: number, y: number, a: number): number {
  const r = (1 - a) * x + a * y
  return Math.abs(x - y) < 0.001 ? y : r
}

const black = new Color('black')
const Button = (props: MeshProps) => {
  const ref = useRef<Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  const [selected, setSelected] = useState(false)
  const colorTo = useMemo(
    () => new Color(Math.floor(Math.random() * 16777216)),
    []
  )

  useFrame(() => {
    // ref.current.rotation.x = hovered
    //   ? MathUtils.lerp(ref.current.rotation.x, -Math.PI * 2, 0.025)
    //   : MathUtils.lerp(ref.current.rotation.x, 0, 0.025)

    ref.current.rotation.x = hovered
      ? lerp(ref.current.rotation.x, -Math.PI * 2, 0.025)
      : lerp(ref.current.rotation.x, 0, 0.025)

    ref.current.position.z = selected
      ? MathUtils.lerp(ref.current.position.z, 0, 0.025)
      : MathUtils.lerp(ref.current.position.z, -3, 0.025)
    ;(ref.current.material as MeshPhysicalMaterial).color.lerp(
      selected ? colorTo : black,
      0.025
    )
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => {
        setSelected(!selected)
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry />
      <meshPhysicalMaterial
        roughness={0}
        metalness={0}
        thickness={3.12}
        ior={1.74}
        transmission={1.0}
      />
    </mesh>
  )
}

export default Button
