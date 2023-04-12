import { useRef, useEffect, useState } from 'react'
import { MeshProps, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const Box = (props: MeshProps) => {
  const ref = useRef<Mesh>(null)
  const [hovered, setHover] = useState(false)
  const [rotate, setRotate] = useState(false)

  useEffect(() => {
    console.log(ref.current)
  }, [])

  useFrame((_, delta) => {
    if (ref.current && rotate) {
      ref.current.rotation.x += 1 * delta
      ref.current.rotation.y += 0.5 * delta
    }
  })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerDown={() => setRotate(!rotate)}
      onPointerUp={(e) => console.log('pointer up' + e.object.name)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onUpdate={(self) => console.log('onUpdate', self)}
    >
      <boxGeometry />
      <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
    </mesh>
  )
}

export default Box
