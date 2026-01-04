// import { Canvas, useFrame, useThree } from "@react-three/fiber"
// import { useMemo, useRef } from "react"
// import * as THREE from "three"

// const PARTICLE_COUNT = 110
// const MOUSE_EASING = 8      // higher = snappier
// const PARTICLE_DAMPING = 0.92
// const FORCE_STRENGTH = 0.18
// const MAX_FORCE = 0.35

// /* ================= Mouse Field ================= */

// function useMouseField() {
//   const { viewport } = useThree()

//   const target = useRef(new THREE.Vector3())
//   const current = useRef(new THREE.Vector3())

//   useFrame((state, delta) => {
//     target.current.set(
//       (state.mouse.x * viewport.width) / 2,
//       (state.mouse.y * viewport.height) / 2,
//       0
//     )

//     // exponential smoothing → antigravity feel
//     current.current.lerp(
//       target.current,
//       1 - Math.exp(-delta * MOUSE_EASING)
//     )
//   })

//   return current
// }

// /* ================= Particle ================= */

// function Particle({
//   origin,
//   mouse,
// }: {
//   origin: THREE.Vector3
//   mouse: React.MutableRefObject<THREE.Vector3>
// }) {
//   const mesh = useRef<THREE.Mesh>(null!)
//   const velocity = useRef(new THREE.Vector3())

//   useFrame((_, delta) => {
//     if (!mesh.current) return

//     const pos = mesh.current.position
//     const dir = new THREE.Vector3().subVectors(mouse.current, pos)

//     const distance = Math.max(dir.length(), 0.6)
//     dir.normalize()

//     const force =
//       Math.min(FORCE_STRENGTH / distance, MAX_FORCE)

//     velocity.current.add(dir.multiplyScalar(force))
//     velocity.current.multiplyScalar(PARTICLE_DAMPING)

//     pos.addScaledVector(velocity.current, delta * 60)

//     // subtle return to origin (keeps composition stable)
//     pos.lerp(origin, 0.002)
//   })

//   return (
//     <mesh ref={mesh} position={origin.toArray()}>
//       <sphereGeometry args={[0.15, 16, 16]} />
//       <meshStandardMaterial
//         color="#3b82f6"
//         emissive="#3b82f6"
//         emissiveIntensity={0.3}
//         transparent
//         opacity={0.85}
//         roughness={0.2}
//         metalness={0.3}
//       />
//     </mesh>
//   )
// }

// /* ================= Scene ================= */

// export default function AntiGravityBackground() {
//   const origins = useMemo(() => {
//     return Array.from({ length: PARTICLE_COUNT }).map(
//       () =>
//         new THREE.Vector3(
//           (Math.random() - 0.5) * 14,
//           (Math.random() - 0.5) * 14,
//           (Math.random() - 0.5) * 2
//         )
//     )
//   }, [])

//   return (
//     <div className="absolute inset-0 -z-10 pointer-events-none">
//       <Canvas
//         camera={{ position: [0, 0, 10], fov: 50 }}
//         style={{ background: 'transparent' }}
//         gl={{
//           alpha: true,
//           antialias: true,
//           powerPreference: 'high-performance'
//         }}
//         dpr={[1, 2]}
//       >
//         <color attach="background" args={['transparent']} />
//         <ambientLight intensity={0.8} />
//         <pointLight position={[10, 10, 10]} intensity={1.2} />
//         <pointLight position={[-10, -10, -10]} intensity={0.5} />

//         <Scene particles={origins} />
//       </Canvas>
//     </div>
//   )
// }

// /* ================= Scene Wrapper ================= */

// function Scene({ particles }: { particles: THREE.Vector3[] }) {
//   const mouse = useMouseField()

//   return (
//     <>
//       {particles.map((origin, i) => (
//         <Particle key={i} origin={origin} mouse={mouse} />
//       ))}
//     </>
//   )
// }
