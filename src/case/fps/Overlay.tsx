import React from 'react'
import styled from 'styled-components'

const Instructions = styled.div`
  color: white;
  position: absolute;
  left: 100px;
  top: 10px;
  font-family: monospace;
  text-shadow: 1px 1px 2px black;
  user-select: none;
`

const Overlay = () => {
  return (
    <Instructions>
      W,A,S,D to move.
      <br />
      Space to jump.
      <br />
      Mouse click to shoot.
    </Instructions>
  )
}

export default Overlay
