'use client'

import { OceanMesh } from '@/components/canvas/Ocean'
import { OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'

// const Logo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Logo), { ssr: false })
// const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
// const Dog2 = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
// const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
const Boat = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Boat), { ssr: false })
const AlphaBoat = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.AlphaBoat), { ssr: false })
// const OceanMesh = dynamic(() => import('@/components/canvas/Ocean').then((mod) => mod.OceanMesh), { ssr: false })
// const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
//   ssr: false,
//   loading: () => (
//     <div className='flex h-96 w-full flex-col items-center justify-center'>
//       <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
//         <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
//         <path
//           className='opacity-75'
//           fill='currentColor'
//           d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
//         />
//       </svg>
//     </div>
//   ),
// })
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  const [rotation, setRotation] = useState([0.0, -0.5, 0])
  const [dog2vis, setDog2Vis] = useState(false)
  const [scale, setScale] = useState(1)

  const [selectedDash, setSelectedDash] = useState('dash1') // Options: 'dash1', 'dash2'
  const [selectedMotor, setSelectedMotor] = useState('motor1') // Options: 'motor1', 'motor2'

  const changeRotation = () => {
    setRotation([0.4, -0.7, 2])
  }

  const dogvis = () => {
    setDog2Vis((prev) => !prev)
  }

  const scaleUp = () => {
    setScale((scale) => scale + 0.1)
  }
  const scaleDown = () => {
    setScale((scale) => scale - 0.1)
  }

  const toggleDash = (params) => {
    setSelectedDash((currentValue) => (currentValue === 'dash1' ? 'dash2' : 'dash1'))
  }

  const toggleEngine = (params) => {
    setSelectedMotor((currentValue) => (currentValue === 'motor1' ? 'motor2' : 'motor1'))
  }

  return (
    <>
      <div className='size-full'>
        <div className='absolute right-4 top-10 z-10 mr-6 flex flex-col gap-4 text-white'>
          {/* <Button onClick={changeRotation}>test</Button>
          <div></div>
          <Button onClick={dogvis}>dogvis</Button>
          <div></div>
          <Button onClick={scaleUp}>+</Button>
          <div></div>
          <Button onClick={scaleDown}>-</Button> */}
          <div className='flex items-center justify-between gap-3'>
            Dash:
            <div className='flex gap-2'>
              <button onClick={toggleDash} className='hover:text-orange-500'>{`<-`}</button>
              {selectedDash}
              <button onClick={toggleDash} className='hover:text-orange-500'>{`->`}</button>
            </div>
          </div>

          <div className='flex items-center justify-between gap-3'>
            Engine:
            <div className='flex gap-2'>
              <button onClick={toggleEngine} className='hover:text-orange-500'>{`<-`}</button>
              {selectedMotor}
              <button onClick={toggleEngine} className='hover:text-orange-500'>{`->`}</button>
            </div>
          </div>

          {/* <Button onClick={() => setSelectedDash('dash1')}>Dash 1</Button>
          <Button onClick={() => setSelectedDash('dash2')}>Dash 2</Button>
          <Button onClick={() => setSelectedMotor('motor1')}>Engine 1</Button>
          <Button onClick={() => setSelectedMotor('motor2')}>Engine 2</Button> */}
        </div>
        <Canvas>
          {/* <View orbit className='size-full'> */}
          <Suspense fallback={null}>
            <OrbitControls />
            {/* {dog2vis && <Duck scale={scale} position={[2, -1.6, 5]} />} */}
            {/* <Boat selectedDash={selectedDash} selectedMotor={selectedMotor} scale={0.5} rotation={[0.45, -0.6, 0]} /> */}
            <AlphaBoat scale={0.01} position={[0, 0, 0]} />
            <OceanMesh rotation={[0, 0, 0]} color={'#ffffff'} />
            <Common color={'#050505'} />
            <fog attach='fog' color='#050505' near={4} far={20} />
            <Stats />
          </Suspense>
          {/* </View> */}
        </Canvas>
      </div>
    </>
  )
}
