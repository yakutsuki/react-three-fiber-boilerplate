import { Environment, OrbitControls, Stats } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useRef, useState } from 'react'
import { Model } from './House'
import { Vector3 } from 'three'
import { OrbitControls as OrbitControlsType } from 'three-stdlib'
import annotations from './annotations.json'
import Annotations from './Annotations'
import Buttons from './Button'

function Animate({ controls, lerping, to, target }: any) {
  useFrame(({ camera }, delta) => {
    if (lerping) {
      camera.position.lerp(to, delta * 2)
      controls.current.target.lerp(target, delta * 2)
    }
  })

  return <></>
}

const House = () => {
  const ref = useRef<OrbitControlsType>(null!)
  const [lerping, setLerping] = useState(false)
  const [to, setTo] = useState<Vector3>()
  const [target, setTarget] = useState<Vector3>()
  const [selected, setSelected] = useState(-1)

  const gotoAnnotation = (idx: number) => {
    setTo(annotations[idx].camPos as Vector3)
    setTarget(annotations[idx].lookAt as Vector3)
    setSelected(idx)
    setLerping(true)
  }

  return (
    <Suspense fallback={null}>
      <Canvas
        camera={{ position: [8, 2, 12] }}
        onPointerDown={() => setLerping(false)}
        onWheel={() => setLerping(false)}
      >
        <Environment preset="forest" background blur={0.75} />
        <OrbitControls ref={ref} target={[8, 2, 3]} />
        <Model />
        <Annotations selected={selected} gotoAnnotation={gotoAnnotation} />
        <Animate controls={ref} lerping={lerping} to={to} target={target} />
        <Stats className="stats-pos" />
        <axesHelper args={[10]} />
      </Canvas>
      <Buttons gotoAnnotation={gotoAnnotation} />
    </Suspense>
  )
}

export default House
