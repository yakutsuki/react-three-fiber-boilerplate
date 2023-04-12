import { useRef, useEffect, useState, useMemo } from 'react'
import { MeshProps, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Box = (props: MeshProps) => {
  const ref = useRef<THREE.Mesh>(null)
  const [count, setCount] = useState(0)
  const geometry = useMemo(
    () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.785398)],
    []
  )

  useEffect(() => {
    console.log(ref.current?.geometry.uuid)
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 1 * delta
      ref.current.rotation.y += 0.5 * delta
    }
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => setCount((count + 1) % 2)}
      geometry={geometry[count]}
    >
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  )
}

export default Box
