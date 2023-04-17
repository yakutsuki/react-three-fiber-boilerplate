import styled from 'styled-components'

const Instructions = styled.div`
  color: white;
  position: absolute;
  left: 100px;
  top: 10px;
  font-family: monospace;
  text-shadow: 1px 1px 2px black;
`

const Overlay = () => {
  return (
    <Instructions>
      Select one or more cubes,
      <br />
      then W,A,S,D to move.
    </Instructions>
  )
}

export default Overlay
