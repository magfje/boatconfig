'use client'

import { Line, MeshDistortMaterial, useCursor, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

export const Blob = ({ route = '/', ...props }) => {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
    </mesh>
  )
}

export const Logo = ({ route = '/blob', ...props }) => {
  const mesh = useRef(null)
  const router = useRouter()

  const [hovered, hover] = useState(false)
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
    mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    mesh.current.rotation.z -= delta / 4
  })

  return (
    <group ref={mesh} {...props}>
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} />
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} rotation={[0, 0, 1]} />
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} rotation={[0, 0, -1]} />
      <mesh onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
      </mesh>
    </group>
  )
}

export function Duck(props) {
  const { scene } = useGLTF('/duck.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}
export function Dog(props) {
  const { scene } = useGLTF('/dog.glb')

  return <primitive object={scene} {...props} />
}

export function Boat({ selectedDash, selectedMotor, ...props }) {
  const { scene } = useGLTF('/boattestglb.glb')

  const ref = useRef()

  const dashRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(Math.cos(t / 4) / 18, Math.sin(t / 4) / 20, -0.2 - (1 + Math.sin(t / 1.5)) / 50)
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 30
  })

  useEffect(() => {
    // Ensure all parts start in a consistent state
    scene.traverse((child) => {
      if (
        child.isMesh &&
        (child.name === 'dash1' || child.name === 'dash2' || child.name === 'motor1' || child.name === 'motor2')
      ) {
        if (child.material) {
          child.material.transparent = true // Enable transparency for animation
          child.material.opacity = 0 // Start fully transparent
        }
        child.visible = false // Start with all parts invisible
      }
    })

    // Animate and display the selected parts
    scene.traverse((child) => {
      if (child.isMesh && child.material && child.name === selectedMotor) {
        child.visible = true // Make the selected part visible
        // Animate to make visible
        gsap.to(child.material, { opacity: 1, duration: 1 })
      }
    })

    scene.traverse((child) => {
      if (child.isMesh && child.material && child.name === selectedDash) {
        child.visible = true // Make the selected part visible
        // Animate to make visible
        gsap.to(child.material, { opacity: 1, duration: 1 })
      }
    })

    scene.traverse((child) => {
      if ((child.isMesh && child.name === 'dash1') || child.name === 'dash2') {
        // Assuming 'dash1' is the name you're interested in
        dashRef.current = child
      }
    })
  }, [scene, selectedDash, selectedMotor])

  useFrame(() => {
    if (dashRef.current && dashRef.current.material.opacity < 1) {
      dashRef.current.rotation.y += 0.01 // Rotate slowly
    }
  })

  useEffect(() => {
    const dash1Mesh = scene.getObjectByName('dash1')
    const dash2Mesh = scene.getObjectByName('dash2')

    // Assuming you've determined which dashboard is selected and set it to `selectedDash`
    let targetMesh = selectedDash === 'dash1' ? dash1Mesh : dash2Mesh
    let otherMesh = selectedDash === 'dash1' ? dash2Mesh : dash1Mesh

    if (targetMesh && otherMesh) {
      // Fade out the other mesh
      gsap.to(otherMesh.material, { opacity: 0, duration: 1 })
      // Fade in and rotate the target mesh
      gsap.fromTo(targetMesh.material, { opacity: 0 }, { opacity: 1, duration: 1 })
      gsap.to(targetMesh.rotation, { y: Math.PI * 2, duration: 1, onComplete: () => (targetMesh.rotation.y = 0) })
    }
  }, [selectedDash])

  return <primitive ref={ref} object={scene} {...props} />
}
