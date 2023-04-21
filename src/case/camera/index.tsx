import { Environment, OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { OrbitControls as OrbitControlsType } from 'three-stdlib'
import Arena from './Arena'

const Camera = () => {
  const ref = useRef<OrbitControlsType>(null!)
  const [lerping, setLerping] = useState(false)
  return (
    <Canvas
      camera={{ position: [10, 10, 10] }}
      shadows
      onPointerDown={() => setLerping(false)}
      onWheel={() => setLerping(false)}
    >
      <directionalLight
        intensity={1}
        castShadow
        position={[85.0, 80.0, 70.0]}
        shadow-bias={-0.0002} // 阴影贴图偏差，在确定曲面是否在阴影中时，从标准化深度添加或减去多少。
        shadow-mapSize={[2048, 2048]} // 一个Vector2定义阴影贴图的宽度和高度。
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
      />
      <Environment
        files="./img/drakensberg_solitary_mountain_1k.hdr"
        background
      />
      <Arena controls={ref} lerping={lerping} setLerping={setLerping} />
      <OrbitControls ref={ref} target={[0, 1, 0]} />
      <Stats className="stats-pos" />
    </Canvas>
  )
}

export default Camera
