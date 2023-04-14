import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Circle, OrbitControls, Stats } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const GLTFLoaderDemo = () => {
  const gltf = useLoader(GLTFLoader, './models/monkey.glb')

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
      <directionalLight position={[3.0, 1.0, 4.4]} castShadow />
      <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        children-0-castShadow
      />
      <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle>
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats className="stats-pos" />
    </Canvas>
  )
}

export default GLTFLoaderDemo
