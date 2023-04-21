import { useGLTF } from '@react-three/drei'
import { button, useControls } from 'leva'
import React, { RefObject, useState } from 'react'
import { Vector3 } from 'three'
import { OrbitControls } from 'three-stdlib'
import annotations from './annotations.json'
import { useFrame } from '@react-three/fiber'

interface Props {
  controls: RefObject<OrbitControls>
  lerping: boolean
  setLerping: (lerping: boolean) => void
}

const Arena = ({ controls, lerping, setLerping }: Props) => {
  const { scene } = useGLTF('./models/collision-world.glb')
  const [to, setTo] = useState(new Vector3(10, 10, 10))
  const [target, setTarget] = useState(new Vector3(0, 1, 0))

  useControls('Camera', () => {
    console.log('creating buttons')

    // using forEach
    // const _buttons = {}
    // annotations.forEach((a) => {
    //   _buttons[a.title] = button(() => {
    //     setTo(a.position)
    //     setTarget(a.lookAt)
    //     setLerping(true)
    //   })
    // })
    // return _buttons

    // using reduce
    const _buttons = annotations.reduce(
      (acc, a) =>
        Object.assign(acc, {
          [a.title]: button(() => {
            setTo(a.position as Vector3)
            setTarget(a.lookAt as Vector3)
            setLerping(true)
          })
        }),
      {}
    )
    return _buttons
  })

  useFrame(({ camera }, delta) => {
    if (lerping && controls.current) {
      camera.position.lerp(to, delta)
      controls.current.target.lerp(target, delta)
    }
  })

  return (
    <primitive
      object={scene.children[0]}
      castShadow // 对象是否被渲染到阴影贴图中
      receiveShadow // 材质是否接收阴影
      material-envMapIntensity={0.4}
      onDoubleClick={(e: any) => {
        setTo(e.camera.position.clone())
        setTarget(e.intersections[0].point.clone())
        setLerping(true)
      }}
    />
  )
}

export default Arena
