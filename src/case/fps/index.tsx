import { Environment, PointerLockControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Game from './Game'
import Overlay from './Overlay'

const FPS = () => {
  return (
    <>
      <Canvas shadows>
        <Environment files="./img/rustig_koppie_puresky_1k.hdr" background />
        <Game />
        <PointerLockControls />
        <Stats className="stats-pos" />
      </Canvas>
      <Overlay />
    </>
  )
}

export default FPS
