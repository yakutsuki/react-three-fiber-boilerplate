import { useMemo } from 'react'
import { Group, Scene } from 'three'
import { Octree } from 'three/examples/jsm/math/Octree'

export default function useOctree(scene: Group) {
  //console.log('in useOctree')
  const octree = useMemo(() => {
    console.log('new Octree')
    return new Octree().fromGraphNode(scene)
  }, [scene])

  return octree
}
