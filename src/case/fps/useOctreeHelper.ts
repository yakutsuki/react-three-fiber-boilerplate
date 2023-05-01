import { useThree } from '@react-three/fiber'
import { Octree } from 'three/examples/jsm/math/Octree'
import { OctreeHelper } from 'three/examples/jsm/helpers/OctreeHelper'
import { useEffect } from 'react'
import { useControls } from 'leva'

export default function useOctreeHelper(octree: Octree) {
  //console.log('in useOctreeHelper')
  const { scene } = useThree()

  useEffect(() => {
    console.log('new OctreeHelper')
    const helper = new OctreeHelper(octree, 'hotpink')
    helper.name = 'octreeHelper'
    scene.add(helper)
    return () => {
      console.log('removing OctreeHelper')
      scene.remove(helper)
    }
  }, [octree, scene])

  useControls('Octree Helper', {
    visible: {
      value: false,
      onChange: (v) => {
        const helper = scene.getObjectByName('octreeHelper') as OctreeHelper
        if (helper) helper.visible = v
        const helperDom = document.getElementById('Octree Helper.visible')
        if (helperDom) helperDom.blur()
      }
    }
  })
}
