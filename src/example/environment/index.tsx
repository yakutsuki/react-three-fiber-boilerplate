import { Environment, OrbitControls, Stats } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const EnvironmentDemo = () => {
  const gltf = useLoader(GLTFLoader, './models/monkey.glb')

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }}>
      <Environment
        files="./img/sunflowers_puresky_2k.hdr"
        background
        blur={0.5}
      />
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
      <primitive object={gltf.scene} position={[0, 1, 0]} />
      <OrbitControls target={[0, 1, 0]} autoRotate />
      <axesHelper args={[5]} />
      <Stats className="stats-pos" />
    </Canvas>
  )
}

export default EnvironmentDemo
