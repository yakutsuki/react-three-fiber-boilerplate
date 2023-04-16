import {
  Environment,
  Html,
  OrbitControls,
  Stats,
  useGLTF
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { useState } from 'react'
import Models from './models.json'

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  const [cache, setCache] = useState<Record<string, any>>({})

  if (!cache[url]) {
    const annotations: JSX.Element[] = []

    scene.traverse((child) => {
      if (child.userData.prop) {
        annotations.push(
          <Html
            key={child.uuid}
            position={[child.position.x, child.position.y, child.position.z]}
            distanceFactor={0.25}
            // occlude
            // transform
          >
            <div className="annotation">{child.userData.prop}</div>
          </Html>
        )
      }
    })

    console.log('Caching JSX for url ' + url)
    setCache({
      ...cache,
      [url]: <primitive object={scene}>{annotations}</primitive>
    })
  }

  return cache[url]
}

const Annotations = () => {
  const { model } = useControls({
    model: {
      value: 'hammer',
      options: Object.keys(Models)
    }
  })

  return (
    <>
      <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
        <Environment background files="./img/workshop_1k.hdr" />
        <group>
          <Model url={Models[model as keyof typeof Models]} />
        </group>
        <OrbitControls autoRotate />
        <Stats className="stats-pos" />
      </Canvas>
      <span id="info">
        The {model.replace(/([A-Z])/g, ' $1').toLowerCase()} is selected.
      </span>
    </>
  )
}

export default Annotations
