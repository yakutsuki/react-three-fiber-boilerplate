import { Center, Environment, Stats } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import Button from './Button'

const vec = new Vector3()

function Rig() {
  return useFrame(({ camera, mouse }) => {
    vec.set(mouse.x * 2, mouse.y * 2, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 0, 0)
  })
}

const Lerp = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Environment preset="forest" background />
      <Center>
        {[...Array(5).keys()].map((x) =>
          [...Array(3).keys()].map((y) => (
            <Button key={x + y * 5} position={[x * 2.5, y * 2.5, 0]} />
          ))
        )}
      </Center>
      <Rig />
      <Stats className="stats-pos" />
    </Canvas>
  )
}

export default Lerp
