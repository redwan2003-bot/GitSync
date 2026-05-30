// @ts-nocheck
'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, OrbitControls, Stars } from '@react-three/drei';

// Simple placeholder data for repository nodes
const REPOS = [
  { id: 1, name: 'repo-1', color: '#00ffff' },
  { id: 2, name: 'repo-2', color: '#ff00ff' },
  { id: 3, name: 'repo-3', color: '#ffcc00' },
  { id: 4, name: 'repo-4', color: '#ff4444' },
];

const OrbitingGroup = ({ repo, idx }: { repo: typeof REPOS[0]; idx: number }) => {
  const angle = (idx / REPOS.length) * Math.PI * 2;
  const radius = 4 + idx;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  
  return (
    <group position={[x, 0, z]}>
      <Sphere args={[0.6, 32, 32]}>
        <meshStandardMaterial color={repo.color} emissive={repo.color} />
      </Sphere>
    </group>
  );
};

export default function SignalOrbitScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      style={{ width: '100%', height: '400px' }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial color="#ffffff" emissive="#00ffff" />
      </Sphere>
      {REPOS.map((repo, idx) => (
        <OrbitingGroup key={repo.id} repo={repo} idx={idx} />
      ))}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
