import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
const R3f = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Perf position="top-right" />
    </Canvas>
  )
}
export default R3f
