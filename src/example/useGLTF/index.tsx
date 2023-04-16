import { Environment, OrbitControls, Stats, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import React from 'react'

const Models = [
  { title: 'Hammer', url: './models/hammer.glb' },
  { title: 'Drill', url: './models/drill.glb' },
  { title: 'Tape Measure', url: './models/tapeMeasure.glb' }
]

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

const UseGLTFDemo = () => {
  const { title } = useControls({
    title: {
      options: Models.map(({ title }) => title)
    }
  })
  return (
    <>
      <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
        <Environment background files="./img/workshop_1k.hdr" />
        <group>
          <Model url={Models[Models.findIndex((m) => m.title === title)].url} />
        </group>
        <OrbitControls autoRotate />
        <Stats className="stats-pos" />
      </Canvas>
      <span id="info">The {title} is selected.</span>
    </>
  )
}

useGLTF.preload(Models.map(({ url }) => url))

export default UseGLTFDemo
