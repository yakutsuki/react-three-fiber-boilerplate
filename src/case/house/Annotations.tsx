import React from 'react'
import annotations from './annotations.json'
import { Html } from '@react-three/drei'
import styled from 'styled-components'

const AnnotationDescription = styled.div`
  pointer-events: none;
  font-size: 14px;
  position: absolute;
  top: 20px;
  padding: 1em;
  width: 200px;
  background: rgba(0, 0, 0, 0.66);
  border-radius: 0.5em;
  display: block;
  color: #ffffff;
`

interface Props {
  selected: number
  gotoAnnotation: (index: number) => void
}

const Annotations = ({ selected, gotoAnnotation }: Props) => {
  return (
    <>
      {annotations.map((a, i) => {
        return (
          <Html key={i} position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]}>
            <svg
              height="34"
              width="34"
              transform="translate(-16 -16)"
              style={{ cursor: 'pointer' }}
            >
              <circle
                cx="17"
                cy="17"
                r="16"
                stroke="white"
                strokeWidth="2"
                fill="rgba(0,0,0,.66)"
                onClick={() => gotoAnnotation(i)}
              />
              <text
                x="12"
                y="22"
                fill="white"
                fontSize={17}
                fontFamily="monospace"
                style={{ pointerEvents: 'none' }}
              >
                {i + 1}
              </text>
            </svg>
            {a.description && i === selected && (
              <AnnotationDescription
                id={'desc_' + i}
                dangerouslySetInnerHTML={{ __html: a.description }}
              />
            )}
          </Html>
        )
      })}
    </>
  )
}

export default Annotations
