const Ball = ({ radius }: { radius: number }) => {
  return (
    <mesh castShadow>
      <sphereGeometry args={[radius]} />
      <meshStandardMaterial />
    </mesh>
  )
}

export default Ball
