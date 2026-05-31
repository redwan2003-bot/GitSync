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

const OrbitingGroup = ({ repo, idx }: { repo: typeof REPOS[0]; idx: number }): any => {
  const angle = (idx / REPOS.length) * Math.PI * 2;
  const radius = 4 + idx;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return React.createElement(
    'group' as any,
    { position: [x, 0, z] },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.createElement(
      Sphere,
      { args: [0.6, 32, 32] },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      React.createElement('meshStandardMaterial' as any, {
        color: repo.color,
        emissive: repo.color,
      })
    )
  );
};

export default function SignalOrbitScene() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return React.createElement(
    Canvas as any,
    {
      camera: { position: [0, 0, 12], fov: 60 },
      style: { width: '100%', height: '400px' },
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.createElement('ambientLight' as any, { intensity: 0.8 }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.createElement('pointLight' as any, { position: [10, 10, 10] }),
    React.createElement(Stars, {
      radius: 100,
      depth: 50,
      count: 5000,
      factor: 4,
      saturation: 0,
      fade: true,
    }),
    React.createElement(
      Sphere,
      { args: [1.5, 32, 32] },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      React.createElement('meshStandardMaterial' as any, {
        color: '#ffffff',
        emissive: '#00ffff',
      })
    ),
    REPOS.map((repo, idx) =>
      React.createElement(OrbitingGroup, {
        key: repo.id,
        repo,
        idx,
      })
    ),
    React.createElement(OrbitControls, { enableZoom: false })
  );
}
