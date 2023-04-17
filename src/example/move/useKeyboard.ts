import { useEffect, useRef } from 'react'

export default function useKeyboard() {
  const keyMap = useRef<Record<string, boolean>>({})

  useEffect(() => {
    const onDocumentKey = (e: KeyboardEvent) => {
      keyMap.current[e.code] = e.type === 'keydown'
    }
    document.addEventListener('keydown', onDocumentKey)
    document.addEventListener('keyup', onDocumentKey)
    return () => {
      document.removeEventListener('keydown', onDocumentKey)
      document.removeEventListener('keyup', onDocumentKey)
    }
  })

  return keyMap.current
}
