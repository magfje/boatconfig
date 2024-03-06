import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { createNoise2D } from 'simplex-noise'
import * as THREE from 'three'

const OceanMesh = ({ color }) => {
  const meshRef = useRef()
  const noise2D = createNoise2D()
  const timeRef = useRef(0) // Use a ref to track time

  const geometry = useMemo(() => {
    const segX = 700
    const segY = 100
    const size = 20
    // Create an empty geometry for the lines
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const stepX = size / segX
    const stepY = size / segY

    for (let j = 0; j <= segY; j++) {
      for (let i = 0; i < segX; i++) {
        const x = (i / segX) * size - size / 2
        const y = (j / segY) * size - size / 2
        const z = noise2D(x, y) * 0.1 // Initial Z based on noise

        // Add two vertices for each segment along the X direction
        vertices.push(x, y, z, x + stepX, y, z)
        // vertices.push(y, t, z, y + stepY, x, z)
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices.flat(), 3))

    return geometry
  }, [noise2D])

  const material = useMemo(() => new THREE.LineBasicMaterial({ color: color }), [])
  // Glow material

  useFrame((state, delta) => {
    const positions = geometry.attributes.position
    timeRef.current += delta // Increment time

    // Update positions for animation
    for (let i = 0; i < positions.count; i += 2) {
      const x = positions.getX(i)
      const y = positions.getY(i)
      const z = noise2D(x + timeRef.current * 0.1, y + timeRef.current * 0.4) * 0.1
      positions.setZ(i, z) // Update Z based on noise in animation loop
      positions.setZ(i + 1, z) // Ensure the next vertex in the pair has the same Z to form a straight line
    }
    positions.needsUpdate = true
  })

  return (
    <>
      <lineSegments ref={meshRef} geometry={geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
    </>
  )
}

export { OceanMesh }
