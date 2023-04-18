import styled from 'styled-components'
import annotations from './annotations.json'

const AnnotationsPanel = styled.div`
  position: absolute;
  top: 60px;
  left: 4px;
  width: auto;
  height: auto;

  > ul {
    padding: 0;
    list-style-type: none;
  }
`
const AnnotationButton = styled.button`
  width: 160px;
  height: 70px;
  background-color: rgba(0.25, 0.25, 0.25, 0.5);
  text-align: left;
  padding-left: 20px;
  cursor: pointer;
  color: #ffffff;
  font-family: monospace;
`

interface Props {
  gotoAnnotation: (index: number) => void
}

export default function Buttons({ gotoAnnotation }: Props) {
  return (
    <AnnotationsPanel>
      <ul>
        {annotations.map((a, i) => {
          return (
            <li key={i}>
              <AnnotationButton key={i} onClick={() => gotoAnnotation(i)}>
                {a.title}
              </AnnotationButton>
            </li>
          )
        })}
      </ul>
    </AnnotationsPanel>
  )
}
